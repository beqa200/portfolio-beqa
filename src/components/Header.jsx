import logo from "../assets/images/logo.svg";
import close from "../assets/images/icons/close.svg";
import hamburger from "../assets/images/icons/hamburger.svg";
import HeaderWrap from "../styled-components/HeaderWrap.styled";
import MenuBox from "./MenuBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import Index from "../pages/IndexPortfolio";
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
      <div className="nav">
        <Link className="link" to="/">HOME</Link>
        <Link className="link" to="/portfolio_index" element={<Index />}>PORTFOLIO</Link>
        <Link className="link">CONTACT ME</Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
