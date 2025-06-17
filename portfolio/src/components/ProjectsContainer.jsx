import "../css/ProjectsContainer.css";

const ProjectsContainer = () => {
  return (
    <>
      <h1 id="ProjectsContainer-title">Projects</h1>
      <div className="project-grid">
        {/* Papapya  */}

        <div className="project-card">
          <div className="gradient">
            <div className="project-info">
              <h1 id="project-title">Papaya </h1>
              <div id="project-stack">
                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/React-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>React</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Node-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Node</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/TypeScript-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>TypeScript</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Express-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Express</p>
                </div>
              </div>
              <p id="project-about">
                Specialsed meal delivery serivice for women with PCOS
              </p>

              <div className="button-container">
                <button id="read-more-button">Read more</button>
              </div>
            </div>
          </div>
          <img src="src/assets/papaya.png" alt="" className="project-image" />
        </div>

        {/* Plantity */}

        <div className="project-card">
          <div className="gradient">
            <div className="project-info">
              <h1 id="project-title">Plantify </h1>
              <div id="project-stack">
                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/React-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>React Native</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Node-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Node</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/TypeScript-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>TypeScript</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Express-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Express</p>
                </div>
              </div>
              <p id="project-about">
                Specialsed meal delivery serivice for women with PCOS
              </p>

              <div className="button-container">
                <button id="read-more-button">Read more</button>
              </div>
            </div>
          </div>
          <img src="src/assets/plantify.png" alt="" className="project-image" />
        </div>

        {/* Audio Detective */}

        <div className="project-card">
          <div className="gradient">
            <div className="project-info">
              <h1 id="project-title">Audio Detective </h1>
              <div id="project-stack">
                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/java-grey.png"
                    alt=""
                    className="tech-stack-img"
                    id = "java-tech-stack-icon"
                  />
                  <p>Java</p>
                </div>
                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Android-studio-grey.png"
                    alt=""
                    className="tech-stack-img"
                    id="android-tech-stack-icon"
                  />
                  <p>Android studio</p>
                </div>
              </div>
              <p id="project-about">
                Specialsed meal delivery serivice for women with PCOS
              </p>

              <div className="button-container">
                <button id="read-more-button">Read more</button>
              </div>
            </div>
          </div>
          <img src="src/assets/audioDetective.png" alt="" className="project-image" />
        </div>

        {/* last project */}

        <div className="project-card">
          <div className="gradient">
            <div className="project-info">
              <h1 id="project-title">News Social Media </h1>
              <div id="project-stack">
                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/React-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>React</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Node-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Node</p>
                </div>

                <div className="project-stack-card">
                  <img
                    src="/src/assets/project-tech/Express-grey.png"
                    alt=""
                    className="tech-stack-img"
                  />
                  <p>Express</p>
                </div>
              </div>
              <p id="project-about">
                Specialsed meal delivery serivice for women with PCOS
              </p>

              <div className="button-container">
                <button id="read-more-button">Read more</button>
              </div>
            </div>
          </div>
          <img src="src/assets/NCnews.png" alt="" className="project-image" />
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
