import NavItem from "./NavItem";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavItem text="About Me" icon="info-circle"></NavItem>
      <NavItem text="Portfolio" icon="photo-video"></NavItem>
      <NavItem text="Contact" icon="id-card"></NavItem>
      <NavItem text="Resume" icon="file-invoice"></NavItem>
    </nav>
  );
}

export default Navigation;
