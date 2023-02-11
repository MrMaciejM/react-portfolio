function Intro() {
  //Intro section
  return (
    <section className={"introSection"}>
      <h1 className={"introHeading"}>
        Hi, I'm <span>Maciej</span>.
      </h1>
      <p className="smallHeadline">A Front-End developer.</p>
      <img
        className={"profilePic"}
        src={require("../assets/images/profile-pic.png")}
        alt={"Maciej"}
      />
    </section>
  );
}

export default Intro;
