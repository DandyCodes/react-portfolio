import { NavItem } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  return (
    <NavItem>
      <FontAwesomeIcon icon={["fa", "info-circle"]}></FontAwesomeIcon> About Me
    </NavItem>
  );
}

export default AboutMe;
