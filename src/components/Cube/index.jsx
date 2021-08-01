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
          <AboutMe></AboutMe>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
}

export default Cube;
