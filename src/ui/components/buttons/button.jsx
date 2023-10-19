import styled, { css } from "styled-components";

//CTA Login info accord form

const type = {
  cta: css`
    background-color: var(--color-yellow);
    box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.15);
    padding: 1.6rem 5.6rem;
    font-size: 3.6rem;
    letter-spacing: -0.5px;
    margin-top: 6rem;

    @media (max-width: 1060px) {
      font-size: 2.4rem;
      padding: 1.6rem 4rem;
    }
  `,

  login: css`
    background-color: var(--color-lightblue);
    font-weight: bold;
    font-size: 3.2rem;
    box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.15);
    padding: 1.5rem 4rem;
  `,

  sliderLeft: css`
    width: 6rem;
    height: 4.6rem;
    background-color: var(--color-blue);
    color: var(--color-purewhite);
    font-size: 3rem;
    border-radius: 4rem 0rem 0rem 1rem;
  `,

  sliderRight: css`
    width: 6rem;
    background-color: var(--color-blue);
    color: var(--color-purewhite);
    font-size: 3rem;
    border-radius: 0rem 1rem 4rem 0rem;
  `,

  info: css`
    background-color: var(--color-purewhite);
    border: 3px solid var(--color-blue);
    font-size: 2rem;
    padding: 0.3rem 4rem;
  `,

  form: css`
    background-color: var(--color-blue);
    color: var(--color-white);
    font-size: 2.4rem;
    height: 4.2rem;
    border-radius: 8px;
  `,

  accordion: css`
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--color-white);
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
  `,

  menu: css`
    background-color: var(--color-yellow);
    padding: 2rem;
    font-size: 3rem;
    border-radius: 10px;

    @media (min-width: 1200px) {
      display: none;
    }
  `,
};

const Button = styled.button`
  border: none;
  padding: 0.8rem 1.2rem;
  color: var(--color-blue);
  border-radius: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  // width: 15rem;

  ${(props) => type[props.type]};
`;

export default Button;
