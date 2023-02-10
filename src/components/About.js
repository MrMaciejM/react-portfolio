import "./About.css";
function About() {
  return (
    <section>
      <h2>About</h2>
      <div className="aboutContainer">
        <p>
          I am an IT professional with over 4.5 years of experience pursuing a
          career in web development.
        </p>
        <p>
          I have discovered my passion for coding while working on a project,
          which required me to learn Powershell scripting language to complete
          it.
        </p>
        <p>
          Then I have stumbled across a person showcasing their web dev project,
          connecting to various smarthome devices and controlling them with
          their custom build website.
        </p>
        <p>
          The ability to affect the world with coding has really inspired me to
          pursue it full-time.
        </p>
        <p>
          As a result, I have learned many skills, and built several projects
          showcasing those skills, which I can now use to help someone's dream
          come to fruition.
        </p>
        <div className="smallDivider"></div>
        <p className="outsideWorkText">Outside of work</p>
        <p>Outside of work I like to do various things: </p>
        <p>
          Social: Hanging out with friends and family, playing pool, bowling,
          cinema, water parks.
        </p>
        <p>
          Sports: Football, football training wth my team, tennis, table tennis,
          badminton, squash, volleyball, jogging.
        </p>
        <p>
          Other: coding, tinkering with tech, light gaming, learning new things.
        </p>
      </div>
    </section>
  );
}

export default About;
