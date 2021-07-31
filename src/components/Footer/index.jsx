import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" />
        <p>© John Barker 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
