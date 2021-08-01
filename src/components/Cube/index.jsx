import "./Cube.css";

function Cube() {
  return (
    <div className="perspective">
      <div className="cube-container">
        <div className="cube">
          <article className="face" id="about-me">
            <h1>About Me</h1>
            <p>about</p>
          </article>
          <article className="face" id="portfolio">
            <h1>Portfolio</h1>
            <p>portfolio</p>
          </article>
          <article className="face" id="contact">
            <h1>Contact</h1>
            <p>contact</p>
          </article>
          <article className="face" id="resume">
            <h1>Resume</h1>
            <p>resume</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Cube;
