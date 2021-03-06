import "./AboutMe.css";
import headshot from "../../../assets/images/headshot.jpg";

function AboutMe() {
  return (
    <article className="face" id="about-me">
      <h1>John Barker</h1>
      <p className="subtitle">Full Stack Software Developer</p>
      <img src={headshot} alt="John Barker" id="headshot" />
      <p className="copy">
        Software Developer with a Certificate in Full Stack Web Development from
        the University of Western Australia and a background in electronics,
        communications and linguistics.
      </p>
      <p className="copy">
        Strengths in JavaScript, ORM/backend frameworks, frontend frameworks,
        and responsive, mobile first web design. Completed multiple projects
        utilising Node, Express, Sequelize, jQuery, Bootstrap, Bulma,
        third-party APIs and vanilla JS. An excellent communicator whether
        teaching others or being mentored, with a genuine passion for coding and
        solving problems. Able to leverage diverse experience to liaise
        effectively and empathetically with stakeholders of all backgrounds.
      </p>
      <p className="copy">
        Looking forward to bringing true value to end users through fantastic
        interactive experiences by contributing clean, beautiful code (and
        infectious positivity) to collaborative projects built for improving our
        digital lives.
      </p>
    </article>
  );
}

export default AboutMe;
