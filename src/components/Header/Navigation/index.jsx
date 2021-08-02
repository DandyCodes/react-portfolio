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
      <NavItem
        text="About Me"
        icon="info-circle"
        selected={true}
        deg={0}
        trans={
          "0, 0, max(calc(var(--face-width) * -0.5), calc(var(--max-face-width) * -0.5)"
        }
      ></NavItem>
      <NavItem
        text="Portfolio"
        icon="photo-video"
        deg={-90}
        trans={
          "max(calc(var(--face-width) * -0.5), calc(var(--max-face-width) * -0.5)), 0, 0"
        }
      ></NavItem>
      <NavItem
        text="Contact"
        icon="id-card"
        deg={-180}
        trans={
          "0, 0, min(calc(var(--face-width) * 0.5), calc(var(--max-face-width) * 0.5))"
        }
      ></NavItem>
      <NavItem
        text="Resume"
        icon="file-invoice"
        deg={-270}
        trans={
          "min(calc(var(--face-width) * 0.5), calc(var(--max-face-width) * 0.5)), 0, 0"
        }
      ></NavItem>
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
