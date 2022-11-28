import styled from "styled-components";

const Images = styled.div`
  img {
    display: block;
    margin: auto;
  }
  .tablet {
    display: none;
  }

  .desktop {
    display: none;
  }
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }

    .tablet {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }
`;

export default Images;
