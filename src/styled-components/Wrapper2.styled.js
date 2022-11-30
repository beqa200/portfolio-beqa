import styled from "styled-components";

const Wrapper2 = styled.div`
  .contact {
    border-top: 1px solid #d0c8c7;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 740px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 30px;
      margin-bottom: -50px;
    }
    h1 {
      margin-top: 20px;
      text-align: center;
      padding-bottom: 40px;
      @media (min-width: 740px) {
        padding-top: 20px;
        font-size: 40px;
        width: 340px;
        margin: 0px;
      }
    }
  }
`;

export default Wrapper2;
