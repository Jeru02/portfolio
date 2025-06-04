import "./css/App.css";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-app"> 
        <AboutMe />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}

export default App;
