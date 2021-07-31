import NavItem from "./NavItem";
import "./Navigation.css";

function Navigation() {
  const navClick = event => {
    const clickedNavItem = getNavItem(event);
    if (!clickedNavItem) return;
    if (Array.from(clickedNavItem.classList).includes("selected")) return;
    const navClickEvent = new CustomEvent("navClick", {
      detail: { clicked: clickedNavItem },
    });
    window.dispatchEvent(navClickEvent);
  };
  return (
    <nav onClick={navClick}>
      <NavItem text="About Me" icon="info-circle" selected={true}></NavItem>
      <NavItem text="Portfolio" icon="photo-video"></NavItem>
      <NavItem text="Contact" icon="id-card"></NavItem>
      <NavItem text="Resume" icon="file-invoice"></NavItem>
    </nav>
  );
}

export default Navigation;

function getNavItem(event) {
  if (event.target.tagName === "NAV") return null;
  return event.target.tagName === "path"
    ? event.target.parentElement.parentElement
    : event.target.tagName === "svg"
    ? event.target.parentElement
    : event.target;
}
