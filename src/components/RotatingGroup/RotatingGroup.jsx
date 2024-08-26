import Tubes from './../../components/Tubes/Tubes';
import Particles from './../../components/Particles/Particles';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function RotatingGroup({curves, trigger, fromYRotation=0, toYRotation=0, initialZRotation=0}) {
    const groupRef = useRef(null);
  
    // useFrame(() => {
    //   if (groupRef.current) {
    //     groupRef.current.rotation.y += 0.01; // kontinuierliche Rotation
    //   }
    // });
  
    useEffect(() => {
      gsap.fromTo(groupRef.current.rotation, 
        { y: fromYRotation}, 
        { 
          y: toYRotation,
          scrollTrigger: {
            trigger: trigger,
            start: 'top bottom',
            scrub: true,
          },
          duration: 1,
        }
      )
    }, [trigger]);
  
    return (
      <group ref={groupRef} rotation={[0, 0, initialZRotation]}>
        <Tubes curves={curves} />
        <Particles curves={curves} />
      </group>
    );
}