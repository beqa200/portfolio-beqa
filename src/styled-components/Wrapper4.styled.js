import styled from "styled-components";

const Wrapper4 = styled.div`
  width: 311px;
  margin: auto;

  @media (min-width: 740px) {
    width: 700px;
  }

  @media (min-width: 1350px) {
    width: 1130px;
  }

  .first-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    width: 280px;
    overflow: hidden;
    margin: auto;

    @media (min-width: 740px) {
      width: 689px;
      height: 280px;
    }
    @media (min-width: 1350px) {
      max-width: 600px;
    }
  }
  .info {
    margin-top: 40px;
    border-top: 1px solid #d0c8c7;
    border-bottom: 1px solid #d0c8c7;
    height: 390px;

    @media (min-width: 740px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 280px;
    }

    @media (min-width: 740px) {
      div {
        width: 50%;
      }
    }

    h1 {
      margin-top: 24px;
      font-size: 35px;
      @media (min-width: 740px) {
        width: 100%;
      }
    }

    p {
      margin-top: 24px;
      line-height: 30px;
      @media (min-width: 740px) {
        width: 50%;
        width: 100%;
      }
    }

    button {
      margin-top: 20px;
      @media (min-width: 740px) {
        margin-left: -50%;
      }
    }
  }

  .background {
    margin-top: 20px;

    p {
      margin-top: 28px;
      line-height: 30px;
      padding-bottom: 50px;
    }

    img {
      margin-top: 40px;
      @media (min-width: 740px) {
        max-width: 100%;
      }
    }
  }
  .slider {
    margin-top: 60px;
    display: flex;
    border-top: 1px solid #d0c8c7;
    border-bottom: 1px solid #d0c8c7;

    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-right: 5px;
      margin-left: 5px;
    }

    p {
      font-size: 12px;
      opacity: 0.5;
      margin-right: 5px;
      margin-left: 5px;
    }

    img {
      width: 8px;
      height: 16px;
      margin-bottom: 16px;
      margin-right: 5px;
      margin-left: 5px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 140px;
      cursor: pointer;
      
      &:hover {
        background-color: #ddd9d9;
        opacity: 0.8;
        transition: 0.2s;
      }
    }

    p {
      margin-top: 10px;
    }

    .next {
      text-align: right;
      border-left: 1px solid #d0c8c7;

      h2 {
        border: none;
      }

      align-items: flex-end;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    @media (min-width: 740px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      margin-bottom: -50px;
    }

    h1 {
      text-align: center;
      padding-bottom: 40px;
      width: 200px;

      @media (min-width: 740px) {
        font-size: 40px;
        width: 340px;
        margin: 0px;
      }
    }
  }
`;

export default Wrapper4;
