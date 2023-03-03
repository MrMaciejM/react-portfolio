import "./Header.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function Header() {
  return (
    <header>
      <div className="contactIconsContainer">
        <div>
          <a
            className="socialIconsLink"
            href="https://www.linkedin.com/in/maciejmatulewicz/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              className="socialIconsImg linkedInImg"
              src="https://img.icons8.com/color/96/null/linkedin-circled--v1.png"
              alt="linked in icon"
            />
          </a>
        </div>
        {/* github link */}
        <div>
          <a
            className="socialIconsLink"
            href="https://github.com/MrMaciejM"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              className="socialIconsImg gitHubImg"
              src="https://img.icons8.com/windows/96/null/github.png"
              alt="GitHub icon"
            />
          </a>
        </div>
        {/* Resume/CV */}
        <div className="cvIconContainer">
          <a
            className="socialIconsLink cvLink"
            href="https://drive.google.com/file/d/11hbPearHI6TuSJc2wEBKEER1jlyA64wW/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
            download={"Maciej_Matulewicz_CV"}
          >
            <img
              className="socialIconsImg cvImg"
              src={require("../assets/images/cvIcon.png")}
              alt="CV icon"
            />
            <p>CV</p>
          </a>
        </div>
      </div>
      <div className="navContainer">
        <nav>
          <NavLink to="/react-portfolio">Home</NavLink>
          <Link to="#projectsId">Projects</Link>
          <Link to="#aboutId">About</Link>
          <Link to="#contactId">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;