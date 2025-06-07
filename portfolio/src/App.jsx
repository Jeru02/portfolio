import "./css/App.css";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/ProjectsContainer";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactForm";
import ProjectsContainer from "./components/ProjectsContainer";



function App() {
  return (
    <>
      <NavBar />
      <div className="main-app"> 
        <AboutMe />
        <TechStack />
        <ProjectsContainer />
        <ContactInfo />
      </div>
    </>
  );
}

export default App;
