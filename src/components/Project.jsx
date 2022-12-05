import { InnerWrapper1, StyledButtons } from "../styled-components";
import { Link } from "react-router-dom";
import Image from "./Images";

const Project = (props) => {
  return (
    <InnerWrapper1 num={props.id}>
      <Image
        mobile={require("../assets/images/portfolio/mobile/" +
          props.screenshot)}
        tablet={require("../assets/images/portfolio/tablet/" +
          props.screenshot)}
        desktop={require("../assets/images/portfolio/desktop/" +
          props.screenshot)}
      />
      <div className="info">
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <Link
          to={"/projects/" + props.linkName} 
          onClick={() => {
            props.setId(props.id);
          }}
        >
          <StyledButtons width={"175px"}>VIEW PROJECT</StyledButtons>
        </Link>
      </div>
    </InnerWrapper1>
  );
};

export default Project;
