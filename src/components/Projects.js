import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

function Projects() {
  //
  return (
    <section className="projectsSection">
      <h2>Projects</h2>
      <div className="divider"></div>
      <div className="projectsContainer">
        <div className="projectWrapper">
          {/* Project 1 */}
          <div className="project1Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/daily-planner-app"
              >
                <img
                  src={require("../assets/images/daily-planner.png")}
                  alt={"daily planner app"}
                />
              </a>
              <h4>Work Day Scheduler</h4>
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
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/daily-planner-app/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/daily-planner-app"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 - weather dashboard */}
          <div className="project2Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/weather-dashboard"
              >
                <img
                  src={require("../assets/images/weather-app.png")}
                  alt={"weather api dashboard"}
                />
              </a>
              <h4>Weather Dashboard</h4>
              <p>
                Weather dashboard utilising several stacks, however, the main
                goal was to learn how to use the APIs.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJquery">jQuery</span>
                <span className=" tech techJS">JS</span>
                <span className=" tech techMoment">Moment.js</span>
                <span className=" tech techApi">API</span>
                <span className=" tech bstrap">Bootstrap</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/weather-dashboard/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/weather-dashboard"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 - team generator */}
          <div className="project3Div">
            <div className="projectsWrapperDiv">
              <a target={"_blank"} rel={"noreferrer"} href="#_blank">
                <img
                  src={require("../assets/images/team-generator-app.png")}
                  alt={"Node.js team generator project"}
                />
              </a>
              <h4>Team Generator</h4>
              <p>
                A terminal app that was built with Node.js and JS to get user
                input and render a team based on said input.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
                <span className=" tech nodejs">Node.js</span>
                <span className=" tech jest">jest</span>
              </div>
              <div className="projectLinksBottom">
                <a href="#_blank">Site</a>
                <a href="#_blank">GitHub</a>
              </div>
            </div>
          </div>
          {/* End of Project 3*/}
          {/* Project 4*/}
          <div className="project4Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/readify"
              >
                <img
                  src={require("../assets/images/readify-image.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>Readify</h4>
              <p>
                An API team project that was built with collaborative effort. I
                was responsible for implementing HTML template, Bootstrap, CSS,
                the carousel effect and linking that to JavaScript/jQuery.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
                <span className=" tech techJquery">jQuery</span>
                <span className=" tech techApi">API</span>
                <span className=" tech bstrap">Bootstrap</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/readify/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/readify"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* End of Project 4*/}
          {/* Project 5 - Landing Page*/}
          <div className="project5Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/product-landing-page-v1"
              >
                <img
                  src={require("../assets/images/landing-page-v1.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>Product Landing Page</h4>
              <p>
                My first ever responsive site that I have designed and built
                using HTML, CSS and a pinch of JavaScript, with only my
                self-taught knowledge prior to the bootcamp.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/product-landing-page-v1/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/product-landing-page-v1"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* End of Project 5*/}
          {/* Project 6*/}
          <div className="project6Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/password-generator"
              >
                <img
                  src={require("../assets/images/pwd-generator.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>Password Generator</h4>
              <p>
                Password generator app that generates a password based on
                various user inputs.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/password-generator/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/password-generator"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* End of Project 6*/}
        </div>
      </div>
    </section>
  );
}

export default Projects;
