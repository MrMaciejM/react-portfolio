import "./About.css";
import "./Projects.css";
function About() {
  return (
    <section className="aboutSection">
      <h2 id="aboutId">Skills</h2>
      {/* <div className="divider"></div> */}
      <div className="aboutContainer">
        <div className="skillsImgWrapper">
          <img
            className="skillIconHtmlJs"
            src={require("../assets/images/html-icon.png")}
            alt="html icon"
          />
          <p>HTML5</p>
        </div>
        <div className="skillsImgWrapper">
          <img
            src={require("../assets/images/icons8-css3-96.png")}
            alt="css icon"
          />
          <p>CSS3</p>
        </div>
        <div className="skillsImgWrapper">
          <img
            className="skillIconHtmlJs"
            src={require("../assets/images/jsIcon.png")}
            alt="html icon"
          />
          <p>JavaScript</p>
        </div>
        <div className="skillsImgWrapper">
          <img
            className="skillIconHtmlJs"
            src={require("../assets/images/bootstrapIcon.png")}
            alt="html icon"
          />
          <p>Bootstrap</p>
        </div>

        <div className="skillsImgWrapper">
          <img
            className="skillIconHtmlJs"
            src={require("../assets/images/jQueryIcon.png")}
            alt="html icon"
          />
          <p>jQuery</p>
        </div>
        <div className="skillsImgWrapper">
          <img
            className="skillIconHtmlJs"
            src={require("../assets/images/reactIcon.png")}
            alt="html icon"
          />
          <p>React</p>
        </div>
      </div>
    </section>
  );
}

export default About;
