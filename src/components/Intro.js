function Intro() {
  //Intro section
  return (
    <section className={"introSection"}>
      <h2 className={"introHeading"}>
        Hi, I'm <span>Maciej</span>.
      </h2>
      <p>
        A Front-End developer{" "}
        <span className={"underlineSpan"}>passionate</span> about his work.
      </p>
      <img
        className={"profilePic"}
        src={require("../assets/images/profile-pic.png")}
        alt={"Maciej"}
      />
    </section>
  );
}

export default Intro;
