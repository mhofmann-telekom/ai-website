import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from '../utils/data';
import * as THREE from 'three';
import gsap from 'gsap';
import Tubes from '../components/Tubes/Tubes';
import Particles from '../components/Particles/Particles';
import Sidebar from '../components/Sidebar/Sidebar';
import Slider from "../components/Slider/Slider"
import arrow from "./../assets/icons/arrow-right.svg";
import './App.css';

const PATHS = data.economics[0].paths;
const brainCurves = [];
PATHS.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  brainCurves.push(new THREE.CatmullRomCurve3(points));
});

function App() {
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
      ".headline-subtext",
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
          <p className="headline-subtext">Our AI team specializes in large language models, automating email sorting, enhancing enterprise search, and forecasting demand. We develop advanced AI solutions using cutting-edge techniques:</p>
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
            <button className="secondary-button">
              <span>See our use cases</span>
            </button>
            <span>or</span>
            <button className="primary-button-icon primary-button">
              <span>Reach out to us</span>
              <img src={arrow}/>
            </button>
          </div>
        </div>
        <div className="shape-wrapper">
          <svg id="shape" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="200%" height="100%" rx="29" fill="var(--dark-300)" />
          </svg>
          <div className="canvas-container">
            <Canvas
              style={{ width: "100%", height: "100%" }}
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
      <div id="clientWrapper">
        <h2 className="headline-h2">Our clients & partners:</h2>
        <p className="headline-subtext">We proudly showcase the diverse organizations and individuals we have had the privilege of partnering with.</p>
        <Slider></Slider>
      </div>
    </>
  );
}

export default App;
