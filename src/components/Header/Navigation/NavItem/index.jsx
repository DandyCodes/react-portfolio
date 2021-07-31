import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./NavItem.css";

function NavItem(props) {
  const [selected, setSelected] = useState(!!props.selected);
  const navItemClick = () => {
    setSelected(true);
  };
  return (
    <span
      className={selected ? "selected" : ""}
      onClick={selected ? null : navItemClick}
    >
      <FontAwesomeIcon icon={["fa", props.icon]}></FontAwesomeIcon> {props.text}
    </span>
  );
}

export default NavItem;
