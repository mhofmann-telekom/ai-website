import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from './../../utils/data';
import * as THREE from 'three';
import gsap from 'gsap';

import './Home.css';

import Tubes from './../../components/Tubes/Tubes';
import Particles from './../../components/Particles/Particles';
import Sidebar from './../../components/Sidebar/Sidebar';
import Arrow from "./../../assets/icons/arrow-right.svg";
import Contact from './../../components/Contact/Contact';
import Expertise from './../../components/Expertise/Expertise';

import DentaScan from './../../assets/img/DentaScan.png';
import Clients from './../../components/Clients/Clients';
import Footer from './../../components/Footer/Footer';
import Ressources from '../../components/Ressources/Ressources';

const PATHS = data.economics[0].paths;
const brainCurves = [];
PATHS.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  brainCurves.push(new THREE.CatmullRomCurve3(points));
});

const PATHS2 = data.biology[0].paths;
const biologyCurves = [];
PATHS2.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  biologyCurves.push(new THREE.CatmullRomCurve3(points));
});

const PATHS3 = data.engineering[0].paths;
const crypto = [];
PATHS3.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  crypto.push(new THREE.CatmullRomCurve3(points));
});

function App() {
  const subtextRef = useRef(0);
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".headline-h1",
      { y: 20, opacity: 0 },
      { duration: 1, y: 0, opacity: 1 }
    );
    timeline.fromTo(
      ".headline-text",
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, delay: .3 }
    );
    timeline.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, delay: .3 }
    );

    const items = document.querySelectorAll('.chip');
    items.forEach((item, index) => {
      timeline.fromTo(item, 
        { y: 10, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, delay: .1, ease: 'power2.out'}
      );
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="introduction-wrapper">
        <div className="headline-wrapper">
          <h1 className="headline-h1">Let's power higher performance...</h1>
          <p className="headline-text">through the use of artificial intelligence.</p>
          <p className="headline-subtext" ref={subtextRef}>Our AI team specializes in large language models, automating email sorting, enhancing enterprise search, and forecasting demand utilizing cutting-edge technologies:</p>
          <div id="chip-wrapper">
            <p className="chip">generative AI</p>
            <p className="chip">computer vision</p>
            <p className="chip">sentiment analysis</p>
            <p className="chip">video analytics</p>
          </div>
          <div id="box-wrapper">
            <div className="box">
              <p>14+</p>
              <p>Partners</p>
            </div>
            <div className="box">
              <p>55+</p>
              <p>Projects</p>
            </div>
            <div className="box">
              <p>89+</p>
              <p>Happy clients</p>
            </div>
            <div className="box">
              <p>273+</p>
              <p>Meetings</p>
            </div>
          </div>
          <div className="button-wrapper">
            <a href="#use-cases" className="secondary-button">
              <span>See our use cases</span>
            </a>
            <span>or</span>
            <a href="#contact" className="primary-button-icon primary-button">
              <span>Reach out to us</span>
              <img src={Arrow}/>
            </a>
          </div>
        </div>
        <div id="shape-wrapper">
          {/* <svg id="shape" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="200%" height="100%" rx="29" fill="var(--dark-300)" />
          </svg> */}
          <svg id="shape" width="1513" height="1507" viewBox="0 0 1513 1507" xmlns="http://www.w3.org/2000/svg">
            <rect width="1513" height="1507" rx="92"/>
          </svg>
          <div className="canvas-container">
            <Canvas
              style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}
              pixelratio={window.devicePixelRatio}
              camera={{ position: [0, 0, 0.4] }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Tubes curves={brainCurves} />
              <Particles curves={brainCurves} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
      <Clients></Clients>
      <Expertise></Expertise>
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
              <p className="card-text">Dental imaging and diagnosis often face challenges in accurately segmenting and analyzing complex dental structures from DICOM scans, leading to inefficient workflows and potential inaccuracies in treatment planning.</p>
            </div>
            <div className="card-container">
              <img className="use-case-image" src={DentaScan}/>
            </div>
            <div className="card-container">
              <p className="card-headline">Solution:</p>
              <p className="card-text margin-top-2rem">DentaScan utilizes MONAI-powered algorithms to provide advanced image segmentation of dental structures from DICOM scans, offering precise identification and delineation of teeth, roots, and surrounding tissues.</p>
            </div>
            <div className="card-container">
              <p className="card-headline">Benefits:</p>
              <p className="card-text margin-top-2rem">DentaScan enhances diagnostic accuracy and treatment planning, streamlines dental workflows, and improves patient care and outcomes through its cutting-edge segmentation technology.</p>
            </div>
          </div>
        </div>
      </div>
      <Ressources></Ressources>
      {/* <div style={{backgroundColor:"black", height: "100dvh"}}>
        <Canvas
          style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}
          pixelratio={window.devicePixelRatio}
          camera={{ position: [0, 0, 0.4] }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Tubes curves={crypto} />
          <Particles curves={crypto} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
