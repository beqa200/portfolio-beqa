import Images from "../styled-components/Images.styled";

const Image = (props) => {
  return (
    <Images>
      <img className="mobile" src={props.mobile} />
      <img className="tablet" src={props.tablet} />
      <img className="desktop" src={props.desktop} />
    </Images>
  );
};

export default Image;
