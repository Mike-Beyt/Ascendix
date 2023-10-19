/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../texts/Heading";
import P from "../texts/P";
import Button from "../buttons/button";

const StyledCardRTL = styled.div`
  padding: 3rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);
  background-color: var(--color-purewhite);
  border-radius: 3.2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    border-radius: 1rem 1rem 1rem 1rem;
  }

  @media (max-width: 610px) {
    margin: 0rem 2rem;
  }
`;

const StyledCardLTR = styled.div`
  padding: 3rem;

  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);
  background-color: var(--color-purewhite);
  border-radius: 3.2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    border-radius: 1rem 1rem 1rem 1rem;
  }

  @media (max-width: 610px) {
    margin: 0rem 2rem;
  }
`;

const StyledCoulmnImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCoulmnText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 820px) {
    flex-direction: column;
    align-self: center;
  }
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-self: center;
  }
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  align-self: flex-end;
  margin: 5rem 0rem 0rem 5rem;

  @media (max-width: 1200px) {
    margin: 0;
    align-self: center;
  }
`;

const CoursesCard = ({ img, text, dir, persian, english }) => {
  return (
    <>
      {dir === "rtl" ? (
        <StyledCardRTL>
          <StyledCoulmnImg>
            <img src={img} />
          </StyledCoulmnImg>

          <StyledCoulmnText>
            <StyledBox>
              <Heading type="english"> {english} </Heading>
              <Heading type="header"> {persian}</Heading>
            </StyledBox>

            <P color="text">{text}</P>

            <StyledBtnBox>
              <Button type="info">اطلاعات بیشتر</Button>
            </StyledBtnBox>
          </StyledCoulmnText>
        </StyledCardRTL>
      ) : (
        <StyledCardLTR>
          <StyledCoulmnText>
            <StyledBox>
              <Heading type="english"> {english} </Heading>
              <Heading type="header"> {persian}</Heading>
            </StyledBox>

            <P color="text">{text}</P>

            <StyledBtnBox style={{ alignSelf: "flex-start" }}>
              <Button type="info">اطلاعات بیشتر</Button>
            </StyledBtnBox>
          </StyledCoulmnText>

          <StyledCoulmnImg>
            <img src={img} />
          </StyledCoulmnImg>
        </StyledCardLTR>
      )}
    </>
  );
};

export default CoursesCard;
