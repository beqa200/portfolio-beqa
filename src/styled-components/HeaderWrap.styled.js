import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 311px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px auto;
  position: relative;
  .hamburger {
    width: 24px;
    height: ${(props) => (props.hamb == true ? "20px" : "13px")};
  }
  div {
    display: none;
  }

  @media (min-width: 740px) {
    width: 700px;

    .hamburger {
      display: none;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 300px;
    }
  }
`;

export default HeaderWrap;
