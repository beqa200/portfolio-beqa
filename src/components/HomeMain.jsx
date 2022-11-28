import Wrapper1 from "../styled-components/Wrapper1.styled";
import Images from "../styled-components/Images.styled";
import mobile1 from "../assets/images/homepage/mobile/image-homepage-hero.jpg";
import tablet1 from "../assets/images/homepage/tablet/image-homepage-hero.jpg";
import desktop1 from "../assets/images/homepage/desktop/image-homepage-hero.jpg";
const HomeMain = () => {
  return (
    <Wrapper1>
      <Images>
        <img className="mobile" src={mobile1} />
        <img className="tablet" src={tablet1} />
        <img className="desktop" src={desktop1} />
      </Images>
    </Wrapper1>
  );
};

export default HomeMain;
