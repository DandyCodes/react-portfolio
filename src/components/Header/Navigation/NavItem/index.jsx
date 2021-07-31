import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import "./NavItem.css";

function NavItem(props) {
  const [selected, setSelected] = useState(!!props.selected);
  useEffect(() => {
    const onNavClick = event => {
      event.detail.clicked.textContent.trim() === props.text.trim()
        ? setSelected(true)
        : setSelected(false);
    };
    window.addEventListener("navClick", onNavClick);
    return () => {
      window.removeEventListener("navClick", onNavClick);
    };
  });
  return (
    <span className={selected ? "selected" : ""}>
      <FontAwesomeIcon icon={["fa", props.icon]}></FontAwesomeIcon> {props.text}
    </span>
  );
}

export default NavItem;
