/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: red;
`;

const FormRow = ({ error, children }) => {
  return (
    <StyledFormRow>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
