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
    max-width: 350px;
  }

  .desktop {
    display: none;
    max-width: 600px;
  }
  @media (min-width: 740px) {
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
  @media (min-width: 1350px) {
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
