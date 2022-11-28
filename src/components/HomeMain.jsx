import Wrapper1 from "../styled-components/Wrapper1.styled";
import mobile1 from "../assets/images/homepage/mobile/image-homepage-hero.jpg";
import tablet1 from "../assets/images/homepage/tablet/image-homepage-hero.jpg";
import desktop1 from "../assets/images/homepage/desktop/image-homepage-hero.jpg";
import mobile2 from "../assets/images/homepage/mobile/profile.jpg";
import tablet2 from "../assets/images/homepage/tablet/profile.jpg";
import desktop2 from "../assets/images/homepage/desktop/profile.jpg";
import downArrows from "../assets/images/icons/down-arrows.svg";
import Image from "./Images";
const HomeMain = () => {
  return (
    <Wrapper1>
      <Image mobile={mobile1} tablet={tablet1} desktop={desktop1} />

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
        <Image mobile={mobile2} tablet={tablet2} desktop={desktop2} />
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
      </div>
    </Wrapper1>
  );
};

export default HomeMain;
