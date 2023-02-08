import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

function Projects() {
  //
  return (
    <Carousel interval={null} variant={"dark"} className={"carouselMain"}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/images/daily-planner.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/images/weather-app.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/images/landing-page-v1.png")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;
