import { InnerWrapper1, StyledButtons } from "../styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Image from "./Images";
const Project = (props) => {
  const [project, setProject] = useState("");
  console.log(project.screenshot);
  let api = "http://localhost:3001/" + props.proj;
  const fetchProjects = async () => {
    let response = await fetch(api);
    let data = await response.json();
    setProject(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  if (project.name != undefined) {
    return (
      <InnerWrapper1 num={props.number}>
        <Image
          mobile={require("../assets/images/portfolio/mobile/" +
            project.screenshot)}
          tablet={require("../assets/images/portfolio/tablet/" +
            project.screenshot)}
          desktop={require("../assets/images/portfolio/desktop/" +
            project.screenshot)}
        />
        <div className="info">
          <h1>{project.name}</h1>
          <p>{project.info}</p>
          <StyledButtons width={"175px"}>VIEW PROJECT</StyledButtons>
        </div>
      </InnerWrapper1>
    );
  } else {
    return <div></div>;
  }
};

export default Project;
