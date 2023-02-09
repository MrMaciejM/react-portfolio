import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

function Projects() {
  //
  return (
    <section className="projectsSection">
      <h2>Projects</h2>
      <div className="projectsContainer">
        <div className="projectWrapper">
          {/* Project 1 */}
          <div>
            <img
              src={require("../assets/images/daily-planner.png")}
              alt={"daily planner app"}
            />
            <p>
              Daily scheduler app built to help keep track of tasks and show
              color-coded current, past and future time.
            </p>
            <div className="techDiv">
              <span className="tech techHtml">HTML5</span>
              <span className=" tech techCss">CSS3</span>
              <span className=" tech techJquery">jQuery</span>
              <span className=" tech techJS">JS</span>
              <span className=" tech techMoment">Moment.js</span>
            </div>
          </div>
          {/* Project 2 */}
          <div>
            <img
              src={require("../assets/images/weather-app.png")}
              alt={"weather app"}
            />
            <p>Sample text</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
