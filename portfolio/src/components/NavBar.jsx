import "../css/NavBar.css"

const NavBar = () => {
  return (
    <div id = "navBar" className="hover-underline">
      <p id= "navBar-item">Home</p>
      <p id= "navBar-item">Experience</p>
      <p id= "navBar-item">Projects</p>
       <p id= "navBar-item">Contact</p>
    </div>
  );
};

export default NavBar;
