import WorldIcon from "../../assets/icons/World-Icon";
import "./Expertise.css";
import PlugIcon from "../../assets/icons/Plug-Icon";
import BatteryIcon from "../../assets/icons/Battery-Icon";
import DataIcon from "../../assets/icons/Data-Icon";
import React, { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

export default function Expertise(){

  useEffect(() => {
    const cards = document.querySelectorAll("#expertise .card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 1, 
          delay: index * .6,
          scrollTrigger: {
            trigger: "#card-wrapper",
            start: 'top bottom',
            end: '+=500px',
          }
        }
      );
    });
  }, []);

  return (
    <div id="expertise">
      <h2 className="headline-h2">Our expertise:</h2>
      <p className="headline-subtext margin-y-2rem">Explore the depth of our professional capabilities, where our team's diverse expertise excels across various fields. <br/> We deliver innovative, tailored solutions, ensuring excellence and mastery in every project.</p>
      <div id="card-wrapper">
        <div className="card">
          <WorldIcon strokeColor="var(--magenta)"></WorldIcon>
          <h3>Frontend</h3>
          <p>
            Our front-end development expertise includes cutting-edge technologies for beautiful, responsive, user-friendly interfaces that provide an optimal user experience on all devices.
          </p>
        </div>
        <div className="card">
          <PlugIcon strokeColor="var(--magenta)" strokeWidth={1.7}></PlugIcon>
          <h3>Backend</h3>
          <p>
            Our backend team masters powerful technologies for the creation of stable, scalable and secure server architectures that form the basis for reliable web applications.
          </p>
        </div>
        <div className="card">
          <BatteryIcon strokeColor="var(--magenta)"></BatteryIcon>
          <h3>Infrastructure</h3>
          <p>
            Our expertise in cloud and infrastructure includes leading platforms, to offer scalable hosting solutions, reliable data processing and seamless integration to meet your business needs.
          </p>
        </div>
        <div className="card">
          <DataIcon strokeColor="var(--magenta)"></DataIcon>
          <h3>Analytics</h3>
          <p>
            Our expertise covers the entire data pipeline - from raw data preparation to detailed analysis - to enable you to make informed decisions.
          </p>
        </div>
      </div>
    </div>
  )
}