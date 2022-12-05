import { Header, Footer, Image } from "../components";
import { Wrapper1, StyledButtons } from "../styled-components";
import {
  mobileProfile,
  tabletProfile,
  desktopProfile,
  downArrows,
} from "../assets";
import Index from "./IndexPortfolio";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Wrapper1>
        <h1>Hey, I’m Beka Maisuradze, Front-End Developer.</h1>
        <a href="#about">
          <button className="about-button">
            <div className="div1">
              <img src={downArrows} />
            </div>
            <p>ABOUT ME</p>
          </button>
        </a>
        <div id="about">
          <Image
            mobile={mobileProfile}
            tablet={tabletProfile}
            desktop={desktopProfile}
          />

          <div className="text">
            <h1>About Me</h1>
            <p>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in Tbilisi, Georgia, but I’m happy
              working remotely and have experience in remote teams. When I’m not
              coding, you’ll find me outdoors. I love playing basketball and
              spending time with friends. I’d love you to check out my work.
            </p>
          </div>
          <Link to="/portfolio" element={<Index />}>
            {" "}
            <StyledButtons width={"202px"}>GO TO PORTFOLIO</StyledButtons>
          </Link>
        </div>

        <div className="contact">
          <h1>Interested in doing a project together?</h1>
          <Link to="/contact">
            <StyledButtons width={"162px"}>CONTACT ME</StyledButtons>
          </Link>
        </div>
      </Wrapper1>
      <Footer />
    </div>
  );
};

export default Home;
