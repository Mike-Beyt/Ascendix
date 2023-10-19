import { css, styled } from "styled-components";

const outline = {
  active: css`
    outline: 4px solid var(--color-lightblue);
    box-shadow: none;
  `,
};

export const Avatar = styled.img`
  display: block;
  width: 8rem;
  height: 7.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  box-shadow: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  ${(props) => outline[props.outline]}
`;
