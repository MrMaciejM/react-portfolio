import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/react-portfolio">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
export default Header;
