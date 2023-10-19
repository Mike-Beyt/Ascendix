import styled, { keyframes } from "styled-components";
import Heading from "../components/texts/Heading";
import P from "../components/texts/P";
import Button from "../components/buttons/button";

const animationBlur = keyframes`
  0% {
    opacity: 0;
    filter: blur(15px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
`;

const StyledSection = styled.section`
  height: 70rem;

  background: linear-gradient(
    260deg,
    rgba(60, 65, 173, 1) 0%,
    rgba(48, 52, 129, 1) 100%
  );

  margin: 2rem 8rem;
  border-radius: 3.2rem 3.2rem 3.2rem 32rem;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 860px) {
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 3.2rem 3.2rem 3.2rem 3.2rem;
  }

  @media (max-width: 610px) {
    margin: 0 auto;
    border-radius: 0 0 3.2rem 3.2rem;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.6rem;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & img {
    animation: ${animationBlur} 2s ease-in-out;

    @media (max-width: 860px) {
      width: 55%;
    }

    @media (max-width: 600px) {
      display: none;
    }

    & p {
      @media (max-width: 881px) {
        font-size: 2.4rem;
      }
    }
  }
`;

const StyledColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  animation: ${animationBlur} 2s;

  @media (max-width: 600px) {
    align-items: center;
    gap: 2rem;
  }
`;

const StyledColumnImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroSection = () => {
  return (
    <StyledSection id="hero">
      <StyledDiv>
        <StyledColumnText>
          <Heading type="hero">
            ترقی <br /> از اینجا آغاز می شود
          </Heading>

          <P color="hero">
            اینجا مقصد نهایی شما در مسیر یادگیری زبان انگلیسی است.
          </P>

          <Button type="cta">مشاوره رایگان</Button>
        </StyledColumnText>
        <StyledColumnImg>
          <img src="../../../public/e75bff45-9ce6-42bd-8643-4d7021ac5485.png" />
        </StyledColumnImg>
      </StyledDiv>
    </StyledSection>
  );
};

export default HeroSection;
