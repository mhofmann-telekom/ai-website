import { useEffect, useMemo, useRef } from "react";
import { extend } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const randomRange = (min, max) => Math.random() * (max - min) + min;

function BrainParticles({ curves }) {
    let density = 10;
    let numberOfPoints = density * curves.length;
  
    const points = useRef([]);
    const brainGeo = useRef();
  
    const positions = useMemo(() => {
      let positions = [];
      for (let i = 0; i < numberOfPoints; i++) {
        positions.push(
          randomRange(-1, 1),
          randomRange(-1, 1),
          randomRange(-1, 1)
        );
      }
      return new Float32Array(positions);
    }, [numberOfPoints]);
  
    useEffect(() => {
      for (let i = 0; i < curves.length; i++) {
        for (let j = 0; j < density; j++) {
          points.current.push({
            currentOffset: Math.random(),
            speed: Math.random() * 0.001,
            curve: curves[i],
            currentPosition: Math.random()
          });
        }
      }
    }, [curves, density]);
  
    useFrame(({ clock }) => {
      let currentPositions = brainGeo.current.attributes.position.array;
  
      for (let i = 0; i < points.current.length; i++) {
        points.current[i].currentPosition += points.current[i].speed;
        points.current[i].currentPosition = points.current[i].currentPosition % 1;
  
        let currentPoint = points.current[i].curve.getPointAt(points.current[i].currentPosition);
        currentPositions[i * 3] = currentPoint.x;
        currentPositions[i * 3 + 1] = currentPoint.y;
        currentPositions[i * 3 + 2] = currentPoint.z;
      }
  
      brainGeo.current.attributes.position.needsUpdate = true;
    });
  
    const BrainParticleMaterial = shaderMaterial(
      { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
      // vertex shader
      `
        varying vec2 vUv;
        uniform float time;
        varying float vProgress;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 2. * (1. / -mvPosition.z);
        }
      `,
      // fragment shader
      `
        uniform float time;
        void main() {
          float disc = length(gl_PointCoord.xy - vec2(0.5));
          float opacity = 0.3 * smoothstep(0.5, 0.4, disc);
          gl_FragColor = vec4(vec3(opacity), 1.0);
        }
      `
    );
    extend({ BrainParticleMaterial });
  
    return (
      <points>
        <bufferGeometry attach="geometry" ref={brainGeo}>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <brainParticleMaterial
          attach="material"
          depthTest={false}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    );
}

export default BrainParticles