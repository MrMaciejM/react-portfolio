import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

function Projects() {
  //
  return (
    <section className="projectsSection">
      <h2 id="projectsId">Projects</h2>
      <div className="divider"></div>
      <div className="projectsContainer">
        <div className="projectWrapper">
          {/* Project 1 */}
          <div className="project1Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/GlobeTrotter"
              >
                <img
                  src={require("../assets/images/fGlobeTrotter.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>GlobeTrotter</h4>
              <p>
                A React team project built with various tech and presented on
                the final day of the <span>edX</span> Front-End bootcamp.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
                <span className=" tech techReact">React</span>
                <span className=" tech techJquery">ChakraUI</span>
                <span className=" tech techApi">API</span>
                <span className=" tech bstrap">Kanban</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://globetrotterreact.netlify.app/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/GlobeTrotter"
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
                  src={require("../assets/images/fWeatherApp.png")}
                  alt={"weather api dashboard"}
                />
              </a>
              <h4>Weather Dashboard</h4>
              <p>
                Weather dashboard utilising several stacks, however, the main
                goal was to learn how to use the APIs and work with
                localStorage.
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
          {/* End of project 2 - weather dashboard */}
          {/* Project 3 - Expenses Tracker*/}
          <div className="project6Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/expense-tracker"
              >
                <img
                  src={require("../assets/images/fExpenseTracker.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>Expenses Tracker</h4>
              <p>
                Expenses tracker app built with React to help keep track of
                expenses, as well as date of expenses and sums up the total of
                expenses.
              </p>
              <div className="techDiv">
                <span className="tech techHtml">HTML5</span>
                <span className=" tech techCss">CSS3</span>
                <span className=" tech techJS">JS</span>
                <span className=" tech techReact">React</span>
              </div>
              <div className="projectLinksBottom">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://mrmaciejm.github.io/expense-tracker/"
                >
                  Site
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrMaciejM/expense-tracker"
                >
                  GitHub
                </a>
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
                href="https://github.com/MrMaciejM/daily-planner-app"
              >
                <img
                  src={require("../assets/images/fDailyPlanner.png")}
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
          {/* End of Project 4*/}
          {/* Project 3 - team generator */}
          <div className="project3Div">
            <div className="projectsWrapperDiv">
              <a target={"_blank"} rel={"noreferrer"} href="#_blank">
                <img
                  src={require("../assets/images/fTeamGenerator.png")}
                  alt={"Node.js team generator project"}
                />
              </a>
              <h4>Team Generator</h4>
              <p>
                A terminal app that was built with Node.js to collect user input
                and render an HTML file with the generated team based on
                collected inputs.
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
          {/* Project 5 - Landing Page*/}
          <div className="project5Div">
            <div className="projectsWrapperDiv">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/MrMaciejM/product-landing-page-v1"
              >
                <img
                  src={require("../assets/images/fLandingPage.png")}
                  alt={"password generator app"}
                />
              </a>
              <h4>Product Landing Page</h4>
              <p>
                My first ever responsive product landing site that I have
                designed and built using HTML, CSS and JS.
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
