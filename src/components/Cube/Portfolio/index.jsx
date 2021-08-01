import Project from "./Project";
import "./Portfolio.css";
import headquarters from "../../../assets/images/headquarters.png";

function Portfolio() {
  return (
    <article className="face" id="portfolio">
      <h1>Projects</h1>
      <div id="projects-container">
        <Project>
          <img src={headquarters} alt="headquarters" />
          <h2>Headquarters</h2>
          <a href="https://github.com/Robert-Rousset/headquarters">GitHub</a>
          <p className="description">
            A full stack productivity app with to-do lists, pomodoro timer and
            motivational resources. Employs authentication and server side
            storage. Express, MySQL, Sequelize, HTML, CSS, JavaScript
            Handlebars, Bulma, Heroku.{" "}
          </p>
        </Project>
        <Project>
          <div className="project-overlay" id="gifta">
            <h2>Project 2</h2>
            <p className="description">Description of project two.</p>
            <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
          </div>
        </Project>
        <Project>
          <div className="project-overlay" id="budget-tracker">
            <h2>Project 3</h2>
            <p className="description">Description of project three.</p>
            <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
          </div>
        </Project>
        <Project>
          <div className="project-overlay" id="tech-blog">
            <h2>Project 4</h2>
            <p className="description">Description of project four.</p>
            <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
          </div>
        </Project>
        <Project>
          <div className="project-overlay" id="weather-dashboard">
            <h2>Project 5</h2>
            <p className="description">Description of project five.</p>
            <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
          </div>
        </Project>
        <Project>
          <div className="project-overlay" id="code-quiz">
            <h2>Project 6</h2>
            <p className="description">Description of project six.</p>
            <p className="technologies">HTML, CSS, JavaScript, jQuery</p>
          </div>
        </Project>
      </div>
    </article>
  );
}

export default Portfolio;
