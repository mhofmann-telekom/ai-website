
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from './../../utils/data';
import * as THREE from 'three';

import Tubes from './../../components/Tubes/Tubes';
import Particles from './../../components/Particles/Particles';

import PlusIcon from "./../../assets/icons/PlusIcon.jsx"
import Orion from './../../assets/img/orion.png';
import Speakpeak from './../../assets/img/speakpeak.png';
import DentaScan from './../../assets/img/dentascan.png';
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
    <>
      <div className="use-cases background-dark">
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
              <div className="use-case-image" data-imagetext="oral x-ray">
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
      <div className="use-cases background-light">
        <div id="orion">
          <h4 className="branch-text"></h4>
          <div className="card-container">
            <h3 className="headline-h3 uppercase">Orion</h3>
            <p className='headline-subtext blue'>Speech-to-Text Assistant</p>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Many people have no access to written content due to visual impairments or reading difficulties. This barrier prevents them from benefiting from information and knowledge that is easily accessible to others.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="orion dashboard">
              <img src={Orion}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">Orion offers a solution through advanced speech synthesis technology that converts written text into natural-sounding speech. This technology enables people who have difficulty reading or are visually impaired to easily access written content.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">Orion ensures inclusivity by making written content accessible to all users, regardless of abilities. The technology enhances accessibility and provides a user-friendly experience, demonstrating T-Systems' expertise in AI solutions.</p>
          </div>
        </div>
      </div>
      <div className="use-cases background-light">
        <div id="speakpeak">
          <PlusIcon id="plus" strokeColor='var(--blue)' strokeWidth={.1}></PlusIcon>
          <div id="minus"></div>
          <div className="card-container">
            <h3 className="headline-h3 uppercase">SpeakPeak</h3>
            <p className='headline-subtext blue'>Sentiment Analysis</p>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Many people have no access to written content due to visual impairments or reading difficulties. This barrier prevents them from benefiting from information and knowledge that is easily accessible to others.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="speakpeak dashboard">
              <img src={Speakpeak}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">Orion offers a solution through advanced speech synthesis technology that converts written text into natural-sounding speech. This technology enables people who have difficulty reading or are visually impaired to easily access written content.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">Orion ensures inclusivity by making written content accessible to all users, regardless of abilities. The technology enhances accessibility and provides a user-friendly experience, demonstrating T-Systems' expertise in AI solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usecases;
