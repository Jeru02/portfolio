import "../css/ProjectsContainer.css";

const ProjectsContainer = () => {
  return (
    <>
      <h1 id="ProjectsContainer-title">Projects</h1>
      <div className="project-grid">

        <div className="project-card">
          <div className="gradient">
            <div className="project-info">
              <h1 id="project-title">Papaya </h1>
              <div id="project-stack">

              <div className="project-stack-card">
              <img src="/src/assets/project-tech/React-grey.png" alt="" className="tech-stack-img"/>
              <p>Python</p>


              </div>

              <div className="project-stack-card">
              <img src="/src/assets/project-tech/React-grey.png" alt="" className="tech-stack-img"/>
              <p>Python</p>
              </div>

              <div className="project-stack-card">
              <img src="/src/assets/project-tech/React-grey.png" alt="" className="tech-stack-img"/>
              <p>Python</p>
              </div>


              </div>
              <p id="project-about">Specialsed meal delivery serivice for women with PCOS</p>

              <div className="button-container">
          <button id="read-more-button">Read more</button>

              </div>
            
            </div>
            
          </div>
          <img src="src/assets/papaya.png" alt="" className="project-image" />
          
        </div>


        <div className="project-card">
          <div className="gradient"></div>
          <img src="src/assets/papaya.png" alt="" className="project-image" />
        </div>
        <div className="project-card">
          <div className="gradient"></div>
          <img src="src/assets/papaya.png" alt="" className="project-image" />
        </div>
        <div className="project-card">
          <div className="gradient"></div>
          <img src="src/assets/papaya.png" alt="" className="project-image" />
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
