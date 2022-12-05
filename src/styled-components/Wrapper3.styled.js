import styled from "styled-components";

const Wrapper3 = styled.div`
  .body {
    width: 311px;
    margin: auto;
    
    
    @media (min-width: 740px) {
      width: 700px;
 
    }
    @media (min-width: 1350px) {
      width: 1130px;
      height: ${(props) => (props.isAppear == true ? "" : "507px")};
    }

    .touch {
      border-top: 1px solid #d0c8c7;
      border-bottom: 1px solid #d0c8c7;
      @media (min-width: 1350px) {
        display: flex;
        justify-content: space-between;
      }
      h1 {
        margin-top: 24px;
        font-size: 40px;
      }
      p {
        margin-top: 24px;
        opacity: 0.8;
        line-height: 30px;
        @media (min-width: 1350px) {
          width: 635px;
        }
      }
      .icons {
        margin-top: 24px;
        display: flex;
        width: 95px;
        justify-content: space-between;
        padding-bottom: 32px;
      }
    }

    .contact {
      display: ${(props) => (props.isAppear == true ? "initial" : "none")};
      @media (min-width: 1350px) {
        display: ${(props) => (props.isAppear == true ? "flex" : "none")};
        justify-content: space-between;
      }
      h1 {
        width: 220px;
        margin-top: 20px;
        font-size: 40px;

      }
      form {
        @media (min-width: 1350px) {
          width: 635px;
        }
      }
      p {
        opacity: 0.8;
        margin-top: 24px;
      }
      input {
        margin-top: 8px;
        border: none;
        background-color: #dddddd;
        width: calc(100% - 20px);
        height: 48px;
        padding-left: 20px;
        outline: none;
        &::placeholder {
          opacity: 0.6;
        }
        &[type="text"] {
          padding-bottom: 48px;
        }
      }

      button {
        margin-top: 24px;
        width: 200px;
        height: 48px;
        background: #203a4c;
        border: none;
        color: #ffffff;
        font-size: 12px;
        letter-spacing: 2px;
      }
    }
  }
  .thank {
  
    display: none;
    font-size: 40px;
    align-items: center;
    margin-bottom: -50px;
    display: ${(props) => (props.isAppear == true ? "none" : "initial")};
    @media (min-width: 740px) {
      font-size: 140px;
    }
    @media (min-width: 1350px) {
      width: 1130px;
      height: 200px;
    }
  }
`;

export default Wrapper3;
