
import Slider from "../Slider/Slider";
import "./Clients.css"

function Clients() {
  return (
    <div id="client-wrapper">
        <h2 className="headline-h2">Our clients & partners:</h2>
        <p className="headline-subtext margin-y-2rem">We proudly showcase the diverse organizations and individuals we have had the privilege of partnering with.</p>
        <Slider></Slider>
      </div>
  );
}

export default Clients;
