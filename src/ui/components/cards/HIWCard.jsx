/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../texts/Heading";

const Card = styled.div`
  width: 30rem;
  height: 40rem;
  padding: 2rem;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);

  background-color: var(--color-purewhite);
  border-radius: 3.2rem;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  transition: all 0.3s;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;

const HIWCard = ({ img, textone, texttwo }) => {
  return (
    <Card>
      <img src={img} />

      <Heading type="header">
        {textone} <br /> {texttwo}
      </Heading>
    </Card>
  );
};

export default HIWCard;
