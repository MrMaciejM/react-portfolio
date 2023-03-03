function Intro() {
  //Intro section
  return (
    <section className={"introSection"}>
      <div className="introHeadingsContainer">
        <h1 className={"introHeading"}>
          Hi, I'm <span>Maciej</span>.
        </h1>
        <p className="smallHeadline">A Front-End developer.</p>
        <img
          className={"profilePic"}
          src={require("../assets/images/profile-pic.png")}
          alt={"Maciej"}
        />
      </div>
      <div className="laptopContainer">
        <h3 className="obligatoryIntro">Short about</h3>
        <p>An IT professional turned Front-End Developer.</p>
        <p>
          I am looking for my <span>first chance</span> to break into the
          industry.
        </p>
        <p>
          My action plan, which I <span>currently</span> pursue, is to continue
        </p>
        <p>to learn and expand my current skills and knowledge.</p>
        <p>Long term goal is to become a Full-Stack engineer.</p>
        <p></p>
      </div>
      <div className="sphereGuide"></div>
    </section>
  );
}

export default Intro;