import styled from "styled-components";

const Wrapper1 = styled.div`
  width: 311px;
  margin: auto;

  h1 {
    margin: auto;
    font-size: 40px;
    margin-top: 20px;
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
    
    .div1 {
      width: 48px;
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

    .text {
        margin-top: 30px;
        border-top: 1px solid #D0C8C7 ;
        
        p{
            opacity: 0.8;
            margin-top: 28px;
        }
    }
  }
`;

export default Wrapper1;
