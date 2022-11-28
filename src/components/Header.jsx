import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icons/hamburger.svg";
import Container1 from "../styled-components/Container1.styled";
const Header = () => {
  return (
    <Container1>
      <img src={logo} />
      <img className="hamburger" src={hamburger} />
    </Container1>
  );
};

export default Header;
