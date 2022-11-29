import { Header, Footer, Image, Project } from "../components";
import { Wrapper2, StyledButtons } from "../styled-components";
const Index = () => {
  return (
    <Wrapper2>
      <Header />
      <Project number={0} proj={"tictactoe"} />
      <Project number={1} proj={"githubUser"} />
      <Project number={2} proj={"calculator"} />
      <Project number={3} proj={"pricingcomponent"} />
      <div className="contact">
        <h1>Want to see more projects?</h1>
        <StyledButtons width={"162px"}>Visit GitHub</StyledButtons>
      </div>
      <Footer />
    </Wrapper2>
  );
};

export default Index;
