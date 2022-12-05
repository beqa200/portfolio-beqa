import { Header, Image, Footer } from "components";
import { StyledButtons } from "../styled-components";
import Wrapper4 from "styled-components/Wrapper4.styled";
import { Link } from "react-router-dom";
import { arrowLeft, arrowRight } from "../assets";
import { useParams } from "react-router-dom";
import { projects } from "data";
const PortfolioDetail = (props) => {
  const params = useParams();

  const project = projects.find((proj) => proj.linkName == params.name);
  console.log("result " + params.name);

  return (
    <div>
      <Header />
      <Wrapper4>
        <div className="first-image">
          <Image
            mobile={require("../assets/images/portfolio/mobile/" +
              project.preview)}
            tablet={require("../assets/images/portfolio/tablet/" +
              project.preview)}
            desktop={require("../assets/images/portfolio/desktop/" +
              project.preview)}
          />
        </div>

        <div className="info">
          <div>
            <h1>{project.name}</h1>
            <p>{project.info}</p>
          </div>

          <a href={project.url}>
            <StyledButtons width={"162px"}>VISIT WEBSITE</StyledButtons>
          </a>
        </div>
        <div className="background">
          <h1>Project Background</h1>
          <p>
            This project was a front-end challenge from Frontend Mentor. It’s a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I’ve learned something new with
            each project, helping me to improve and adapt my style.
          </p>
          <h1>Static Previews</h1>
          <Image
            mobile={require("../assets/images/portfolio/mobile/" +
              project.preview)}
            tablet={require("../assets/images/portfolio/tablet/" +
              project.preview)}
            desktop={require("../assets/images/portfolio/desktop/" +
              project.preview)}
          />
        </div>

        <div className="slider">
          <Link
            style={{ textDecoration: "none", width: "50%" }}
            to={
              project.id != 1
                ? "/projects/" + projects[project.id - 2].linkName
                : ""
            }
          >
            <div className="pervious">
              <img src={arrowLeft} />
              <h2>{project.id != 1 ? projects[project.id - 2].name : null}</h2>
              <p>Previous Project</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", width: "50%" }}
            to={
              project.id != projects.length
                ? "/projects/" + projects[project.id].linkName
                : ""
            }
          >
            <div className="next">
              <img src={arrowRight} />
              <h2 className="next">
                {project.id != projects.length
                  ? projects[project.id].name
                  : null}
              </h2>
              <p>Next Project</p>
            </div>
          </Link>
        </div>

        <div className="contact">
          <h1>Interested in doing a project together?</h1>
          <Link to="/contact">
            <StyledButtons width={"162px"}>CONTACT ME</StyledButtons>
          </Link>
        </div>
      </Wrapper4>
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
