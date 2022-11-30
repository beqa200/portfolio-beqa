import { InnerWrapper1, StyledButtons } from "../styled-components";
import { useState } from "react";
import { useEffect } from "react";

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
        <StyledButtons width={"175px"}>VIEW PROJECT</StyledButtons>
      </div>
    </InnerWrapper1>
  );
};

export default Project;
