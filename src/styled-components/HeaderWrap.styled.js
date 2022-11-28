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
`;

export default HeaderWrap;
