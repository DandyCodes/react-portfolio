import { NavItem } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume() {
  return (
    <NavItem>
      <FontAwesomeIcon icon={["fa", "file-invoice"]}></FontAwesomeIcon> Resume
    </NavItem>
  );
}

export default Resume;
