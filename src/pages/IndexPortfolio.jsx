import { Header, Footer, Project } from "../components";
import { Wrapper2, StyledButtons } from "../styled-components";

import { Link } from "react-router-dom";
const Index = (props) => {
  return (
    <div>
<Wrapper2>
      <Header />
      {props.projects.map((project) => (
        <Project
          setId={props.setId}
          linkName={project.linkName}
          name={project.name}
          screenshot={project.screenshot}
          info={project.info}
          id={project.id}
        />
      ))}

      <div className="contact">
        <h1>Want to see more projects?</h1>
        <a href="https://github.com/beqa200" target="_blank">
          <StyledButtons width={"162px"}>Visit GitHub</StyledButtons>
        </a>
      </div>
      <Footer />
    </Wrapper2>
    </div>
    
  );
};

export default Index;
