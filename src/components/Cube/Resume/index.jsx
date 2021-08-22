import "./Resume.css";
import resume from "../../../assets/ResumeJohnBarkerPub.pdf";

function Resume() {
  return (
    <article className="face" id="resume">
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <a href={resume} download>
          resume
        </a>
        .
      </p>
      <h3>Proficiencies</h3>
      <section className="proficiencies">
        <ul>
          <li>JavaScript</li>
          <li>Web Design</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>CSS</li>
          <li>Git/GitHub</li>
          <li>Frontent Frameworks - Bootstrap/Bulma</li>
          <li>Bash</li>
          <li>ODM/ORM - Mongoose/Sequelize</li>
          <li>React.js</li>
          <li>HTML5</li>
          <li>jQuery</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Express.js</li>
          <li>Handlebars.js</li>
        </ul>
      </section>
    </article>
  );
}

export default Resume;
