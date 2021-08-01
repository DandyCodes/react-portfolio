/* eslint-disable jsx-a11y/alt-text */
import "./Project.css";

function Project(props) {
  return (
    <div className="project">
      <a href={props.deployed} target="_blank" rel="noreferrer">
        <img src={props.image} />

        {props.children}
      </a>
      <a
        className="github"
        href={props.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}

export default Project;
