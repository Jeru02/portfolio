import ContactMeButton from "./ContactMeButton";
import "../css/AboutMe.css"
import ContactLinks from "./ContactLinks";
const AboutMe = () => {
  return (
    <div className="aboutMeContainer" >
      <div className="title">
        <h1>Hi, I'm <span className="blue-text">Jeru</span></h1>
        <h1>I build <span className="blue-text">Full stack</span> web applications</h1>
      </div>

      <p id="aboutMeDescription">
        I'm a creative problem-solver with a background in computer science,
        music production, and events management. I’m passionate about using
        technology and culture to build innovative solutions and connect people.
       
      </p>
      <ContactMeButton />
      <ContactLinks />

    </div>
  );
};

export default AboutMe;
