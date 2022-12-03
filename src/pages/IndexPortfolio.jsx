import { Header, Footer, Project } from "../components";
import { Wrapper2, StyledButtons } from "../styled-components";
import { projects } from "../data";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <Wrapper2>
      <Header />
      {projects.map((project) => (
        <Project
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
  );
};

export default Index;
