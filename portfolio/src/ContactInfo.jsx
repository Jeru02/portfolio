import "./css/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div>
      <h1 id="ContactInfo-title">Contact</h1>
      <div id="contact-container">
        <a href="https://www.linkedin.com/in/jeru-boat/">
          <img
            src="src/assets/LinkedIn-Logo.png"
            alt="linkedin"
            className="Contact-img"
          />
        </a>

        <a href="https://github.com/Jeru02">
          <img
            src="src/assets/git-Logo.png"
            alt="github"
            className="Contact-img"
          />
        </a>




        <a href="https://drive.google.com/file/d/1ZlzIYgSD2WWJFPX5hOFy2qRslb6fYpq0/view?usp=drive_link">
          <img
            src="src/assets/CV-Logo.png"
            alt="cv"
            className="Contact-img"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
