import "./About.css";
import "./Projects.css";
function About() {
  return (
    <section className="aboutSection">
      <h2>About</h2>
      {/* <div className="divider"></div> */}
      <div className="aboutContainer">
        <div>
          <p>I am an IT professional with over 4.5 years of experience.</p>
          <p>
            My journey began as an <span>IT apprentice</span> in December 2016,
          </p>
          <p>where I have studied and passed numerous exams while</p>
          <p>working for a risk modelling firm in the insurance market.</p>
          <p>Once I completed my apprenticeship successfully, I was</p>
          <p>hired by the same firm full-time and the rest is history.</p>
        </div>
        <div>
          <p>
            <span>Outside of work</span>..... I am known as one of the best
            foosball{" "}
          </p>
          <p>players in town!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
