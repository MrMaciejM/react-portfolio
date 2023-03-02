import { useState } from "react";

function Contact() {
  //6618abb0-a964-11ed-a31e-753411848f80
  const [blankMsg, updatedMsg] = useState();
  return (
    <section className="contactContainer">
      <h2 id="contactId">Contact</h2>
      <div className="divider"></div>
      <form
        action="https://public.herotofu.com/v1/6d0967c0-b6a7-11ed-aa6e-d1d3c574abee"
        method="post"
        onSubmit={(e) => {
          //e.preventDefault();
          const myMsg = "Your message has been sent!";
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
        <p>Alternatively:</p>
        <p>maciej456@icloud.com</p>
      </form>
    </section>
  );
}
// <img src="https://img.icons8.com/windows/96/null/github.png"/>
export default Contact;
