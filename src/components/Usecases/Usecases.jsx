import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from './../../utils/data';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RotatingGroup from '../RotatingGroup/RotatingGroup';

import Mic from "./../../assets/icons/mic.svg";
import Orion from './../../assets/img/orion.png';
import Speakpeak from './../../assets/img/speakpeak.png';
import DentaScan from './../../assets/img/dentascan.png';
import "./Usecases.css";

gsap.registerPlugin(ScrollTrigger);

const biologyPaths = data.biology[0].paths;
const biologyCurves = [];
biologyPaths.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  biologyCurves.push(new THREE.CatmullRomCurve3(points));
});

function Usecases() {
  const plusRef = useRef(null);
  const minusRef = useRef(null);
  const micRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(plusRef.current, 
      { x: '0%'}, 
      { 
        x: '20%',
        scrollTrigger: {
          trigger: '#icon-wrapper',
          start: 'top bottom',
          scrub: true
        }
      }
    );

    gsap.fromTo(minusRef.current, 
      { x: '20%'},
      { 
        x: '0%',
        scrollTrigger: {
          trigger: '#icon-wrapper',
          start: 'top bottom',
          scrub: true
        }
      }
    );

    gsap.fromTo(micRef.current, 
      { x: '-30%'}, 
      { 
        x: '0',
        scrollTrigger: {
          trigger: '.use-cases:has(#orion)',
          start: 'top bottom',
          scrub: true
        }
      }
    );
  }, []);

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
              style={{ width: "100%", height: "100%" }}
              pixelratio={window.devicePixelRatio}
              camera={{ position: [0, 0, 0.4] }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <RotatingGroup curves={biologyCurves} trigger="#dentascan" fromYRotation={Math.PI * 3} initialZRotation={Math.PI / 3.2}/>
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
        <img id="mic-icon" src={Mic} ref={micRef}></img>
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
        <div id="icon-wrapper">
          {/* <PlusIcon ref={plusRef} height={400} width={400} strokeColor='var(--blue)' strokeWidth={.15} /> */}
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            fill="none"
            ref={plusRef}
          >
            <path
              d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
              style={{ strokeWidth:'0.2', stroke: 'var(--blue)' }}
            />
          </svg>
          <div id="minus" ref={minusRef}></div>
        </div>
        <div id="speakpeak">
          <div className="card-container">
            <h3 className="headline-h3 uppercase">SpeakPeak</h3>
            <p className='headline-subtext blue'>Sentiment Analysis</p>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Traditional data analysis often misses the emotional context of customer feedback, reviews, and support calls, limiting insights into how users perceive products and services.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="speakpeak dashboard">
              <img src={Speakpeak}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">SpeakPeak uses sentiment analysis to enrich feedback data with emotional insights. This allows companies to better understand the needs, concerns, and preferences of their customers and to respond appropriately.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">SpeakPeak enables more accurate and effective customer interactions, improves user experience, and supports customer retention through targeted and emotion-based responses.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usecases;
