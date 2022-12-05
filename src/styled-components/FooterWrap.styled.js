import styled from "styled-components";
const FooterWrap = styled.footer`
  width: 100%;
  height: 354px;
  background-color: #33323d;
  margin: 80px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 740px) {
    height: 70px;
    flex-direction: row;
  }
  
  img {
    filter: invert(100%) sepia(38%) saturate(2%) hue-rotate(242deg)
      brightness(111%) contrast(101%);
  }

  .link {
    color: white;
    display: block;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 2px;
  }

  div {
    display: flex;
    width: 95px;
    justify-content: space-between;
  }
`;

export default FooterWrap;
