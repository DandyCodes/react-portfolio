import NavItem from "./NavItem";
import "./Navigation.css";

function Navigation(props) {
  const navClick = () => {
    console.log(props);
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
