import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import "./NavItem.css";

function NavItem(props) {
  const [selected, setSelected] = useState(!!props.selected);
  useEffect(() => {
    const switchToNavItem = () => {
      setSelected(true);
      const cube = document.querySelector(".cube");
      cube.style.transform = `rotateY(${props.deg}deg) translate3d(${props.trans})`;
      cube.style.webkitTransform = `rotateY(${props.deg}deg) translate3d(${props.trans})`;
    };
    const onNavClick = event => {
      event.detail.clicked.textContent.trim() === props.text.trim()
        ? switchToNavItem()
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
