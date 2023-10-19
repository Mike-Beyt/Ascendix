/* eslint-disable react/prop-types */
import styled, { keyframes, css } from "styled-components";
import { Avatar } from "../avatars/avatar";
import Heading from "../texts/Heading";
import P from "../texts/P";

const slideIn = keyframes`
   0% {
    transform: translateX(100%);
    opacity:0
  }

  70%{
    opacity:0;
  }


  100% {
    transform: translateX(0);
    opacity:1
  }
`;

const slideOut = keyframes`
   0% {
    transform: translateX(-100%);
   opacity:0
  }

  70%{
    opacity:0;
  }

  100% {
    transform: translateX(0);
    opacity:1
  }
`;

const animation = {
  in: css`
    animation: ${slideIn} 0.3s ease-in-out;
  `,
  out: css`
    animation: ${slideOut} 0.3s ease-in-out;
  `,
};

const StyledSlideBox = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 3rem;

  transition: transform 0.3s ease-in-out;
  ${(props) => animation[props.animation]}
`;

const StyledStudentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const SliderText = styled.div`
  padding: 0 6rem;
`;

const SliderItem = ({ slide, index, curIndex, dir }) => {
  const text = slide.stdComment;
  const img = slide.stdImage;
  const name = slide.stdName;

  const isActive = curIndex === index;

  return (
    <>
      {isActive && (
        <StyledSlideBox animation={`${dir === 1 ? "in" : "out"}`}>
          <StyledStudentBox>
            <Avatar outline="active" src={img} />
            <Heading type="slider"> {name}</Heading>
          </StyledStudentBox>
          <SliderText>
            <P color="slider">{text}</P>
          </SliderText>
        </StyledSlideBox>
      )}
    </>
  );
};

export default SliderItem;
