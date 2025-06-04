import "../css/TechStack.css";

const TechStack = () => {
  return (
    <>
    <h1 id ="techStackTitle">Tech Stack</h1>
      <div className="techStackContainer">
        <div className="techstack-card">
          <img src="src/assets/Python-Logo.png" alt="" className="logo-img"/>
          <p>Python</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/CSS-Logo.png" alt="" className="logo-img"/>
          <p>CSS</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/Java-Logo.png" alt="" className="logo-img" />
          <p>Java</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/MySQL-Logo.png" alt="" className="logo-img"/>
          <p>MySQL</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/Node-Logo.png" alt="" className="logo-img"/>
          <p>Node</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/React-Logo.png" alt="" className="logo-img"/>
          <p>React</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/TypeScript-Logo.png" alt="" className="logo-img"/>
          <p>TypeScript</p>
        </div>

        <div className="techstack-card">
          <img src="src/assets/HTML5-Logo.png" alt="" className="logo-img"/>
          <p>HTML</p>
        </div>
      </div>
    </>
  );
};

export default TechStack;
