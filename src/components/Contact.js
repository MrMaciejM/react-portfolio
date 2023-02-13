import { useState } from "react";
import "./Projects.css";
import "./Contact.css";

function Contact() {
  //6618abb0-a964-11ed-a31e-753411848f80
  const [blankMsg, updatedMsg] = useState();
  return (
    <section>
      <h2>Contact</h2>
      <div className="divider"></div>
      <form
        action="https://public.herotofu.com/v1/"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          let myMsg = "Your message has been sent!";
          return updatedMsg(myMsg);
        }}
      >
        <div className="formElementsWrapper">
          <div>
            <label for="name">Name</label>
            <input name="Name" id="name"></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input name="Email" id="email"></input>
          </div>
          <div className="textAreaDiv">
            <label for="message">Message</label>
            <textarea
              name="Message"
              id="message"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <div>
            <button className="btnSubmit" type="submit" value="Download CTA">
              Submit
            </button>
          </div>
          <p className="msgSentText">{blankMsg}</p>
        </div>
      </form>
      <div className="contactIconsContainer">
        <a
          className="socialIconsLink"
          href="https://www.linkedin.com/in/maciejmatulewicz/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="socialIconsImg"
            src="https://img.icons8.com/color/96/null/linkedin-circled--v1.png"
            alt="linked in icon"
          />
        </a>
        {/* github link */}
        <a
          className="socialIconsLink"
          href="https://github.com/MrMaciejM"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="socialIconsImg gitHubImg"
            src="https://img.icons8.com/windows/96/null/github.png"
            alt="GitHub icon"
          />
        </a>
        {/* Resume/CV */}
        <a
          className="socialIconsLink cvLink"
          href="Maciej_Matulewicz_CV.pdf"
          target={"_blank"}
          rel="noreferrer"
          download={"Maciej_Matulewicz_CV"}
        >
          <img
            className="socialIconsImg cvImg"
            src="https://img.icons8.com/color/96/null/pdf.png"
            alt="CV icon"
          />
          <p>CV</p>
        </a>
      </div>
    </section>
  );
}
// <img src="https://img.icons8.com/windows/96/null/github.png"/>
export default Contact;
