import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import "./Cube.css";

function Cube() {
  return (
    <div className="perspective">
      <div className="cube-container">
        <div className="cube">
          <article className="face" id="about-me">
            <AboutMe></AboutMe>
          </article>
          <article className="face" id="portfolio">
            <Portfolio></Portfolio>
          </article>
          <article className="face" id="contact">
            <Contact></Contact>
          </article>
          <article className="face" id="resume">
            <Resume></Resume>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Cube;
