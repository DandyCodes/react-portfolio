import { NavItem } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  return (
    <NavItem>
      <FontAwesomeIcon icon={["fa", "photo-video"]}></FontAwesomeIcon> Portfolio
    </NavItem>
  );
}

export default Portfolio;
