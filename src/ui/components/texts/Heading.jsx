import styled, { css } from "styled-components";

const type = {
  hero: css`
    font-size: 7.2rem;
    color: var(--color-white);

    @media (max-width: 1332px) {
      font-size: 5.6rem;
    }

    @media (max-width: 1200px) {
      font-size: 5.6rem;
    }

    @media (max-width: 1100px) {
      font-size: 4.4rem;
    }

    @media (max-width: 917px) {
      font-size: 4rem;
    }

    @media (max-width: 600px) {
      text-align: center;
    }
  `,

  title: css`
    font-size: 4.8rem;
    color: var(--color-blue);
    word-spacing: -5px;

    @media (max-width: 600px) {
      font-size: 4rem;
    }
  `,

  header: css`
    font-size: 3.2rem;
    color: var(--color-blue);
    word-spacing: 2px;
  `,

  english: css`
    font-size: 3.2rem;
    color: var(--color-blue);
    border-bottom: 2px solid var(--color-white);
    //font-weight: bolder;
  `,

  slider: css`
    font-size: 2.8rem;
    color: var(--color-blue);

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  `,
};

const Heading = styled.h1`
  ${(props) => type[props.type]};
`;

export default Heading;
