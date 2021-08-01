import Project from "./Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <article className="face" id="portfolio">
      <h1>Projects</h1>
      <div id="projects-container">
        <Project>
          <h2>Project 1</h2>
          <p className="description">Description of project one.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
        <Project>
          <h2>Project 2</h2>
          <p className="description">Description of project two.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
        <Project>
          <h2>Project 3</h2>
          <p className="description">Description of project three.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
        <Project>
          <h2>Project 4</h2>
          <p className="description">Description of project four.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
        <Project>
          <h2>Project 5</h2>
          <p className="description">Description of project five.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
        <Project>
          <h2>Project 6</h2>
          <p className="description">Description of project six.</p>
          <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
        </Project>
      </div>
    </article>
  );
}

export default Portfolio;
