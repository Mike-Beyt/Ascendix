/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from "styled-components";
import Heading from "../texts/Heading";
import P from "../texts/P";
import Button from "../buttons/button";
import { MdAdd } from "react-icons/md";
import { MdHorizontalRule } from "react-icons/md";
import { useState } from "react";

const dropDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity:0
  }

  100% {
    transform: translateY(0);
    opacity:1
  }
`;

const dropUp = keyframes`
  0% {
    transform: translateY(0);
    opacity:1;
    display:flex;
  }


  100% {
    transform: translateY(-50%);
    opacity:0;
    //display:none
  }
`;

const animation = {
  down: css`
    animation: ${dropDown} 0.3s ease-in-out;
  `,
  up: css`
    animation: ${dropUp} 0.3s ease-in-out;
  `,
};

const StyledAccordionItem = styled.div`
  background-color: var(--color-purewhite);
  padding: 2rem 4rem;
  border-radius: 3.2rem;

  display: flex;
  flex-direction: column;

  & button {
    align-self: center;
  }
`;

const StyledQuestionBox = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

const StyledAnwerBox = styled.div`
  display: none;

  width: 100%;
  line-height: 2;

  transition: transform 0.3s ease-in-out;

  ${(props) => animation[props.animation]}
`;

const AccordionItem = ({ accordionItem }) => {
  const [isActive, setIsActive] = useState(false);
  const [dir, setDir] = useState(0);

  const handleOpen = () => {
    setIsActive(true);
    setDir(1);
  };

  const handleClose = () => {
    setIsActive(false);
    setDir(0);
  };

  return (
    <StyledAccordionItem
      style={isActive === true ? { gap: "4rem" } : { gap: 0 }}
    >
      <StyledQuestionBox>
        <Heading type="slider">{accordionItem.question} </Heading>

        <Button
          type="accordion"
          style={
            isActive === false ? { display: "block" } : { display: "none" }
          }
          onClick={() => handleOpen()}
        >
          <MdAdd />
        </Button>

        <Button
          type="accordion"
          style={isActive === true ? { display: "block" } : { display: "none" }}
          onClick={() => handleClose()}
        >
          <MdHorizontalRule />
        </Button>
      </StyledQuestionBox>

      <StyledAnwerBox
        style={isActive === true ? { display: "flex" } : { display: "none" }}
        animation={`${dir === 1 ? "down" : "up"}`}
      >
        <P color="text">{accordionItem.anwser}</P>
      </StyledAnwerBox>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
