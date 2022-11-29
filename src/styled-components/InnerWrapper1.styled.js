import styled from "styled-components";

const InnerWrapper1 = styled.div`
  margin: auto;
  @media (min-width: 740px) {
    display: flex;
    align-items: center;
    width: 700px;
  }
  @media (min-width: 1350px) {
    width: 1130px;
  }

  img {
    width: 300px;
    height: 320px;
    margin-top: 30px;
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
