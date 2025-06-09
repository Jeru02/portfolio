import ContactMeButton from "./ContactMeButton";
import "../css/AboutMe.css";
import ContactLinks from "./ContactLinks";

import Lottie from "lottie-react";
import LottieAnimation from "../assets/Lotties/aura.json";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="title">
        <h1>
          Hi, I'm <span className="blue-text">Jeru</span>
        </h1>
        <h1>
          I build <span className="blue-text">Full stack</span> web applications
        </h1>

        <p id="location-text">⚲ Bishops Stortford, United Kingdom</p>
      </div>

      <p id="aboutMeDescription">
        A computer science graduate with a background in music production and
        events management.
      </p>

      <ContactMeButton />
      <ContactLinks />
    </div>
  );
};

export default AboutMe;
