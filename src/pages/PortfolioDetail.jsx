import { Header, Image, Footer } from "components";
import { StyledButtons } from "../styled-components";
import Wrapper4 from "styled-components/Wrapper4.styled";
import { Link } from "react-router-dom";
import { arrowLeft, arrowRight } from "../assets";
const PortfolioDetail = (props) => {
  console.log(props.siteLink);
  return (
    <div>
      <Header />
      <Wrapper4>
        <div className="first-image">
          <Image
            mobile={require("../assets/images/portfolio/mobile/" +
              props.preview)}
            tablet={require("../assets/images/portfolio/tablet/" +
              props.preview)}
            desktop={require("../assets/images/portfolio/desktop/" +
              props.preview)}
          />
        </div>

        <div className="info">
          <div>
            <h1>{props.name}</h1>
            <p>{props.info}</p>
          </div>

          <a href={props.url}>
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
              props.preview)}
            tablet={require("../assets/images/portfolio/tablet/" +
              props.preview)}
            desktop={require("../assets/images/portfolio/desktop/" +
              props.preview)}
          />
        </div>

        <div className="slider">
          <Link
            style={{ textDecoration: "none", width: "50%" }}
            to={
              props.id != 1
                ? "/portfolio_index/" + props.projects[props.id - 2].linkName
                : ""
            }
          >
            <div className="pervious">
              <img src={arrowLeft} />
              <h2>
                {props.id != 1 ? props.projects[props.id - 2].name : null}
              </h2>
              <p>Previous Project</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", width: "50%" }}
            to={
              props.id != props.projects.length
                ? "/portfolio_index/" + props.projects[props.id].linkName
                : ""
            }
          >
            <div className="next">
              <img src={arrowRight} />
              <h2 className="next">
                {props.id != props.projects.length
                  ? props.projects[props.id].name
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
