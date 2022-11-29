import { Header, Footer, Image, Project } from "../components";
import { Wrapper2 } from "../styled-components";
const Index = () => {
  return (
    <Wrapper2>
      <Header />
      <Project proj={'tictactoe'}/>
      <Footer />
    </Wrapper2>
  );
};

export default Index;
