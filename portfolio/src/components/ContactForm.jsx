import "../css/ContactForm.css";

const ContactInfo = () => {
  return (
    <div>
      <h1 id="ContactInfo-title">Contact</h1>


      <p id="contact-description">I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>

      <form
        action="https://formsubmit.co/5f773e2deb0c91036deb29779bcb1f8d"
        method="POST"
        id="email-form-container"
      >
        <div id="name-email-container">
          <div id="name-container">
            <p className="labels">
              Name<span id="star">*</span>
            </p>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              id="name"
            />
          </div>

          <div id="email-container">
            <p className="labels">
              Email<span id="star">*</span>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="john@doe.com"
              id="email"
            />
          </div>
        </div>

        <div id="msg-container">
          <p className="labels">
            Message<span id="star">*</span>
          </p>
          <textarea
            name="msg"
            required
            placeholder="Hello there, I would like to ask you about..."
            id="msg"
          ></textarea>
        </div>

        <div id="button-container">
          <button type="submit" id="button">
            <img
              src="src/assets/send-icon.png"
              alt="send"
              className="send-img"
            />
            <p className="button-text">Send</p>
          </button>
        </div>
      </form>
      <a id="toContactForm"></a>
    </div>
  );
};

export default ContactInfo;
