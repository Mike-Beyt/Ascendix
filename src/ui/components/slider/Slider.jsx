/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import Button from "../buttons/button";
import SliderItem from "./SliderItem";

const SliderBox = styled.div`
  //overflow: hidden;
  position: absolute;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 3rem;

  top: 6rem;
  left: 6rem;
  width: 60rem;
  height: 30rem;

  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);
  background-color: var(--color-purewhite);
  border-radius: 3.2rem;

  @media (max-width: 1200px) {
    position: relative;

    top: 0rem;
    left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 35rem;
  }
  @media (max-width: 600px) {
    //padding: relative;
    top: 0;
    left: 0;
    width: 37rem;
    height: 44rem;
  }
`;

const SliderBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.06rem;
  // z-index: 1000;
`;

const Slider = ({ students }) => {
  const [curIndex, setCurIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const maxSlide = students.length - 1;

  const handleNext = () => {
    curIndex === maxSlide ? setCurIndex(0) : setCurIndex(curIndex + 1);
    setDir(1);
  };

  const handlePrev = () => {
    curIndex === 0 ? setCurIndex(maxSlide) : setCurIndex(curIndex - 1);
    setDir(-1);
  };

  return (
    <SliderBox>
      {students.map((slide, index) => (
        <SliderItem
          slide={slide}
          curIndex={curIndex}
          index={index}
          key={slide.id}
          dir={dir}
        />
      ))}

      <SliderBtnDiv>
        <Button type="sliderRight" onClick={() => handleNext()}>
          <BiRightArrowAlt />
        </Button>
        <Button type="sliderLeft" onClick={() => handlePrev()}>
          <BiLeftArrowAlt />
        </Button>
      </SliderBtnDiv>
    </SliderBox>
  );
};

export default Slider;
