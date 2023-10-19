import styled, { css } from "styled-components";

const color = {
  hero: css`
    font-size: 2.8rem;
    color: var(--color-white);

    @media (max-width: 1060px) {
      font-size: 2.4rem;
    }

    @media (max-width: 600px) {
      text-align: center;
    }
  `,
  text: css`
    font-size: 2rem;
    color: var(--color-blue);
  `,
  slider: css`
    font-size: 2rem;
    color: var(--color-blue);
  `,
  form: css`
    font-size: 1.2rem;
    color: var(--color-blue);
    text-align: center;
  `,
};

const P = styled.p`
  ${(props) => color[props.color]};

  word-spacing: -1px;
`;

export default P;
