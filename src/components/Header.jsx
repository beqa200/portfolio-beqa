import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icons/hamburger.svg";
import HeaderWrap from "../styled-components/HeaderWrap.styled";

const Header = () => {
  return (
    <HeaderWrap>
      <img src={logo} />
      <img className="hamburger" src={hamburger} />
    </HeaderWrap>
  );
};

export default Header;
