import styled from "styled-components";

const Wrapper1 = styled.div`
  width: 311px;
  margin: auto;
  @media (min-width: 740px) {
    width: 700px;
  }
  h1 {
    margin: auto;
    font-size: 40px;
    margin-top: 20px;

    @media (min-width: 740px) {
      font-size: 100px;
    }
  }
  .about-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #203a4c;
    color: white;
    font-size: 12px;
    width: 200px;
    height: 48px;
    border: none;
    margin-top: 32px;
    @media (min-width: 740px) {
      width: 240px;
      height: 70px;
      font-size: 16px;
    }
    .div1 {
      width: 48px;
      @media (min-width: 740px) {
        width: 60px;
      }
    }

    p {
      width: 100%;
      letter-spacing: 2px;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  #about {
    margin-top: 70px;
    border-bottom: 1px solid #d0c8c7;
    height: 800px;

    @media (min-width: 740px) {
      height: 1120px;
    }

    .text {
      margin-top: 30px;
      border-top: 1px solid #d0c8c7;

      p {
        opacity: 0.8;
        margin-top: 28px;
        padding-bottom: 24px;
        @media (min-width: 740px) {
          font-size: 18px;
        }
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      padding-bottom: 40px;
    }
  }
`;

export default Wrapper1;
