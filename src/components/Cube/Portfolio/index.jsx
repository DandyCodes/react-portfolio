import Project from "./Project";
import "./Portfolio.css";
import headquarters from "../../../assets/images/headquarters.png";
import gifta from "../../../assets/images/gifta.png";
import budget from "../../../assets/images/budget.png";
import techBlog from "../../../assets/images/tech-blog.png";
import weather from "../../../assets/images/weather-dashboard.png";
import quiz from "../../../assets/images/code-quiz.png";

function Portfolio() {
  return (
    <article className="face" id="portfolio">
      <h1>Projects</h1>
      <div id="projects-container">
        <Project
          deployed="https://safe-beach-27101.herokuapp.com/"
          image={headquarters}
          github="https://github.com/Robert-Rousset/headquarters"
        >
          <h2>Headquarters</h2>
          <p>
            A full stack productivity app with to-do lists, pomodoro timer and
            motivational resources. Employs authentication and server side
            storage. Express, MySQL, Sequelize, HTML, CSS, JavaScript,
            Handlebars, Bulma, Heroku.
          </p>
        </Project>
        <Project
          deployed="https://dandycodes.github.io/gifta/"
          image={gifta}
          github="https://github.com/DandyCodes/gifta"
        >
          <h2>Gifta</h2>
          <p>
            A powerful yet simple charity locator which suggests nearby
            not-for-profit organisations based on the item the user wishes to
            dispose of. HTML, CSS, JavaScript, jQuery, Bulma. APIs: MediaWiki,
            Google Maps and Places.
          </p>
        </Project>
        <Project
          deployed="https://dandy-budget-tracker-pwa.herokuapp.com/"
          image={budget}
          github="https://github.com/DandyCodes/budget-tracker-pwa"
        >
          <h2>Budget PWA</h2>
          <p>
            Budget tracking progressive web app. Credits and debits can be added
            without an internet connection. Upon reestablishing a connection,
            all transactions are uploaded. Mongo, Express, IndexedDB, Service
            Worker, Cache, Heroku.
          </p>
        </Project>
        <Project
          deployed="https://nameless-escarpment-79542.herokuapp.com/"
          image={techBlog}
          github="https://github.com/DandyCodes/tech-blog"
        >
          <h2>Tech Blog</h2>
          <p>
            A CMS-style tech blog site where users can create an account, login,
            publish new posts and comment on existing posts. Handlebars MVC,
            Sequelize, Express, Heroku.
          </p>
        </Project>
        <Project
          deployed="https://dandycodes.github.io/weather-dashboard/"
          image={weather}
          github="https://github.com/DandyCodes/weather-dashboard"
        >
          <h2>Weather Dash</h2>
          <p>
            A dynamically updated weather dashboard using OpenWeatherMap. HTML,
            CSS, JavaScript, OpenWeather One Call API
          </p>
        </Project>
        <Project
          deployed="https://dandycodes.github.io/code-quiz/"
          image={quiz}
          github="https://github.com/DandyCodes/code-quiz"
        >
          <h2>Code Quiz</h2>
          <p>
            A timed, interactive code quiz with a leader board. Bootstrap,
            jQuery, HTML
          </p>
        </Project>
      </div>
    </article>
  );
}

export default Portfolio;
