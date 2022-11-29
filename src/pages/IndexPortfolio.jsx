import { Header, Footer, Image, Project } from "../components";
import { Wrapper2 } from "../styled-components";
const Index = () => {
  return (
    <Wrapper2>
      <Header />
      <Project number={0} proj={'tictactoe'}/>
      <Project number={1}proj={'githubUser'}/>
      <Footer />
    </Wrapper2>
  );
};

export default Index;
