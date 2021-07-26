import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavItem.css";

function NavItem(props) {
  return (
    <span>
      <FontAwesomeIcon icon={["fa", props.icon]}></FontAwesomeIcon> {props.text}
    </span>
  );
}

export default NavItem;
