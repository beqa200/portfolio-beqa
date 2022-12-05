import styled from "styled-components";

const InnerWrapper1 = styled.div`
  margin: auto;
  margin-top: 15px;

  @media (min-width: 740px) {
    display: flex;
    justify-content: space-between;
    flex-direction: ${(props) => (props.num % 2 == 0 ? "row" : "row-reverse")};
    align-items: center;
    width: 700px;
  }

  @media (min-width: 1350px) {
    width: 1130px;
    height: 380px;
    justify-content: space-evenly;
  }

  img {
    width: 300px;
    height: 320px;
    box-shadow: 10px 5px 5px grey;
    border-radius: 10px;

    @media (min-width: 740px) {
      max-width: 400px;
      height: 330px;
      margin-top: 30px;
    }

    @media (min-width: 1350px) {
      width: 320px;
      max-height: 400px;
    }
  }

  .info {
    border-top: 1px solid #d0c8c7;
    width: 311px;
    margin: 25px auto;

    @media (min-width: 740px) {
      margin: 0px;
    }

    @media (min-width: 1350px) {
      margin: 0px;
    }

    h1 {
      margin-top: 24px;
    }

    p {
      margin-top: 24px;
      opacity: 0.8;
      line-height: 30px;
    }
    
    button {
      margin-top: 24px;
    }
  }
`;

export default InnerWrapper1;
