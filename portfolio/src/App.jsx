import "./css/App.css";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/ProjectsContainer";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactForm";
import ProjectsContainer from "./components/ProjectsContainer";
import Experience from "./components/Experience";



function App() {
  return (
    <>
      
      <div className="main-app"> 
        <NavBar />
        <AboutMe />
        <Experience />
        <TechStack />
        <ProjectsContainer />
        <ContactInfo />
        ©2025 Jeru Boateng. 
      </div>
    </>
  );
}

export default App;
