import styled from "styled-components";

const Images = styled.div`
  img {
    display: block;
    margin: auto;
  }

  .mobile {
    width: 311px;
  }
  .tablet {
    display: none;
    width: 700px;
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
  @media (min-width: 1100px) {
    .mobile {
      display: none;
    }

    .tablet {
      display: none;
    }

    .desktop {
      display: initial;
    }
  }
`;

export default Images;
