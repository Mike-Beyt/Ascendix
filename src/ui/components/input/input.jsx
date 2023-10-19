import styled from "styled-components";

const StyledInput = styled.input`
  background-color: var(--color-white);
  border: none;
  height: 4rem;
  border-radius: 3.2rem;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 380px) {
    width: 20rem;
    padding: 2rem;
  }
`;

export default StyledInput;
