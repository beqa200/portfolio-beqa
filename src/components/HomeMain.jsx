import mobileHero from "../assets/images/homepage/mobile/hero2.jpg";
import tabletHero from "../assets/images/homepage/tablet/hero2.jpg";
import desktopHero from "../assets/images/homepage/desktop/hero2.jpg";
import mobileProfile from "../assets/images/homepage/mobile/profile.jpg";
import tabletProfile from "../assets/images/homepage/tablet/profile.jpg";
import desktopProfile from "../assets/images/homepage/desktop/profile.jpg";

import Wrapper1 from "../styled-components/Wrapper1.styled";
import downArrows from "../assets/images/icons/down-arrows.svg";
import Image from "./Images";
import StyledButtons from "../styled-components/Buttons.styled";

const HomeMain = () => {
  return (
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
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Tbilisi, Georgia, but I’m happy working
            remotely and have experience in remote teams. When I’m not coding,
            you’ll find me outdoors. I love playing basketball and spending time
            with friends. I’d love you to check out my work.
          </p>
        </div>
        <StyledButtons width={"202px"}>GO TO PORTFOLIO</StyledButtons>
      </div>

      <div className="contact">
        <h1>Interested in doing a project together?</h1>
        <StyledButtons width={"162px"}>CONTACT ME</StyledButtons>
      </div>
    </Wrapper1>
  );
};

export default HomeMain;
