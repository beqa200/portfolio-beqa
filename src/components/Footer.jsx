import FooterWrap from "../styled-components/FooterWrap.styled";
import logo from "../assets/images/logo.svg";
import github from "../assets/images/icons/github.svg";
import twitter from "../assets/images/icons/twitter.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterWrap>
      <img src={logo} />
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/">
        PORTFOLIO
      </Link>
      <Link className="link" to="/">
        CONTACT ME
      </Link>

      <div>
        <a href="https://github.com/beqa200" target="_blank">
          <img src={github} />
        </a>
        <a href="https://twitter.com/BeqaMaisuradze7" target="_blank">
          <img src={twitter} />
        </a>
        <a href="https://www.linkedin.com/in/beqa-maisuradze-76a730234/" target="_blank">
          <img src={linkedin} />
        </a>
      </div>
    </FooterWrap>
  );
};

export default Footer;
