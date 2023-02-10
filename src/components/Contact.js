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
      </form>
    </section>
  );
}

export default Contact;
