import Navigation from "./Navigation";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <img style={{ userSelect: "none" }} src={logo} alt="logo" />
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
