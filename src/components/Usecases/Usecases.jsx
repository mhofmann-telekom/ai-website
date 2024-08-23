
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from './../../utils/data';
import * as THREE from 'three';

import Tubes from './../../components/Tubes/Tubes';
import Particles from './../../components/Particles/Particles';

import DentaScan from './../../assets/img/DentaScan.png';
import "./Usecases.css"

const PATHS2 = data.biology[0].paths;
const biologyCurves = [];
PATHS2.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  biologyCurves.push(new THREE.CatmullRomCurve3(points));
});

function Usecases() {
  return (
    <div id="use-cases">
      <div>
        <h2 className="headline-h2">Our use cases and products</h2>
        <p className="headline-subtext margin-y-2rem">In this section, we introduce you our use cases for artificial intelligence in healthcare, insurance and manufacturing.</p>
      </div>
      <div id="healthcare">
        <div className="canvas-container">
          <Canvas
            style={{ width: "100%", height: "100%"}}
            pixelratio={window.devicePixelRatio}
            camera={{ position: [0, 0, 0.4] }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <group rotation={[0, 0, Math.PI / 3.3]}>
              <Tubes curves={biologyCurves} />
              <Particles curves={biologyCurves} />
            </group>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div id="dentascan">
          <h4 className="branch-text">Healthcare</h4>
          <div className="card-container">
            <h3 className="headline-h3 uppercase">DentaScan</h3>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Dental imaging and diagnosis often face challenges in accurately segmenting and analyzing complex dental structures from DICOM scans, leading to inefficient workflows and potential inaccuracies in treatment planning.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="mouth rontgen image">
              <img src={DentaScan}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">DentaScan utilizes MONAI-powered algorithms to provide advanced image segmentation of dental structures from DICOM scans, offering precise identification and delineation of teeth, roots, and surrounding tissues.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">DentaScan enhances diagnostic accuracy and treatment planning, streamlines dental workflows, and improves patient care and outcomes through its cutting-edge segmentation technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usecases;
