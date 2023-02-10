import "./Projects.css";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="divider"></div>
      <form>
        <label id="name">Name</label>
        <input id="name"></input>
      </form>
    </section>
  );
}

export default Contact;
