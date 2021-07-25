import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import "./Navigation.css";
import styled from "styled-components";

export const NavItem = styled.span`
  white-space: nowrap;
  text-align: center;
  color: whitesmoke;
  cursor: pointer;
  font-size: 1.1rem;
  :hover {
    color: var(--link);
  }
`;

function Navigation() {
  return (
    <nav>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
    </nav>
  );
}

export default Navigation;
