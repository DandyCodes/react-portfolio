import { NavItem } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <NavItem>
      <FontAwesomeIcon icon={["fa", "id-card"]}></FontAwesomeIcon> Contact
    </NavItem>
  );
}

export default Contact;
