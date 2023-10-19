/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Avatar } from "../avatars/avatar";

const StyledAvatarBox = styled.div`
  width: 90%;
  flex-wrap: wrap;
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

const AvatarBox = ({ students }) => {
  return (
    <StyledAvatarBox>
      {students.map((slide) => (
        <Avatar src={slide.stdImage} key={slide.id} />
      ))}
    </StyledAvatarBox>
  );
};

export default AvatarBox;
