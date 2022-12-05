import { logo, close, hamburger } from "../assets";
import { HeaderWrap } from "../styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Index from "../pages/IndexPortfolio";
import MenuBox from "./MenuBox";
const Header = (props) => {
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
      {hamb == true ? <MenuBox setAppear={props.setAppear} /> : null}
      <div className="nav">
        <Link
          className="link"
          to="/"
          onClick={() => {
            props.setAppear(true);
          }}
        >
          HOME
        </Link>
        <Link
          className="link"
          to="/portfolio_index"
         
          onClick={() => {
            props.setAppear(true);
          }}
        >
          PORTFOLIO
        </Link>
        <Link className="link" to="/contact">
          CONTACT ME
        </Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
