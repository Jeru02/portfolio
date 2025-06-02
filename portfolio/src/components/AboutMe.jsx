import ContactMeButton from "./ContactMeButton";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer" >
      <div className="title">
        <h1>Hi, I'm Jeru :)</h1>
        <h1>I build Full stack web applications</h1>
      </div>

      <p id="aboutMeDescription">
        I'm a creative problem-solver with a background in computer science,
        music production, and events management. I’m passionate about using
        technology and culture to build innovative solutions and connect people.
       
      </p>
      <ContactMeButton />

    </div>
  );
};

export default AboutMe;
