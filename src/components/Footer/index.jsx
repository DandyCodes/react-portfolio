import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <div>© John Barker 2021</div>
      <div>
        <a href="https://github.com/DandyCodes">
          <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/johndurackbarker/">
          <FontAwesomeIcon icon={["fab", "linkedin"]}></FontAwesomeIcon>{" "}
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/15135625/dandycodes">
          <FontAwesomeIcon icon={["fab", "stack-overflow"]}></FontAwesomeIcon>{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
