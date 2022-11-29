import logo from "../assets/images/logo.svg";
import close from "../assets/images/icons/close.svg";
import hamburger from "../assets/images/icons/hamburger.svg";
import HeaderWrap from "../styled-components/HeaderWrap.styled";
import MenuBox from "./MenuBox";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hamb, setHamb] = useState(false);
  return (
    <HeaderWrap hamb={hamb}>
      <img src={logo} />
      <img
        className="hamburger"
        src={hamb == true ? close : hamburger}
        onClick={() => {
          setHamb(!hamb);
        }}
      />
      {hamb == true ? <MenuBox /> : null}
      <div>
        <Link className="link">HOME</Link>
        <Link className="link">PORTFOLIO</Link>
        <Link className="link">CONTACT ME</Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
