import { Routes, Route } from "react-router-dom";

import { Link } from "react-scroll";

import Header from "./components/Header";
import "./components/Header.css";

import Intro from "./components/Intro";
import "./components/Intro.css";

import Projects from "./components/Projects";
import "./App.css";

import About from "./components/About";
import "./components/About.css";

import Contact from "./components/Contact";
import "./components/Contact.css";
import Footer from "./components/Footer";

function App() {
  return (
    //
    <div className="divMain">
      <Header></Header>
      <Intro></Intro>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      {/* <Routes>
        <Route path="/react-portfolio" element={<Intro />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
