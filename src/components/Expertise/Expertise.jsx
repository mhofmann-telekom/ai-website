import WorldIcon from "../../assets/icons/World-Icon";
import "./Expertise.css";
import PlugIcon from "../../assets/icons/Plug-Icon";
import BatteryIcon from "../../assets/icons/Battery-Icon";
import DataIcon from "../../assets/icons/Data-Icon";

export default function Expertise(){
  return (
    <div id="expertise-wrapper">
      <h2 className="headline-h2">Our expertise:</h2>
      <p className="headline-subtext margin-y-2rem">Explore the depth of our professional capabilities, where our team's diverse expertise excels across various fields. <br/> We deliver innovative, tailored solutions, ensuring excellence and mastery in every project.</p>
      <div id="card-wrapper">
        <div className="card">
          <WorldIcon strokeColor="var(--dark-200)"></WorldIcon>
          <h3>Frontend</h3>
          <p>
            Our front-end development expertise includes cutting-edge technologies such as HTML, CSS, JavaScript and frameworks like React, Angular and Vue.js. We create responsive, user-friendly interfaces that provide an optimal user experience on all devices.
          </p>
        </div>
        <div className="card">
          <PlugIcon strokeColor="var(--dark-200)" strokeWidth={1.7}></PlugIcon>
          <h3>Backend</h3>
          <p>
            Our backend team masters powerful technologies such as Node.js, Django and Flask. We provide stable, scalable and secure server architectures that form the basis for reliable web applications.
          </p>
        </div>
        <div className="card">
          <BatteryIcon strokeColor="var(--dark-200)"></BatteryIcon>
          <h3>Infrastructure</h3>
          <p>
            Our expertise in cloud and infrastructure includes leading platforms such as Microsoft Azure, AWS and Google Cloud Platform. We offer scalable hosting solutions, reliable data processing and seamless integration to meet your business needs.
          </p>
        </div>
        <div className="card">
          <DataIcon strokeColor="var(--dark-200)"></DataIcon>
          <h3>Data</h3>
          <p>
            We use advanced tools such as Microsoft Azure Data Factory and Power BI to transform and visualize complex data sets. Our expertise covers the entire data pipeline - from raw data preparation to detailed analysis - to enable you to make informed decisions.
          </p>
        </div>
      </div>
    </div>
  )
}