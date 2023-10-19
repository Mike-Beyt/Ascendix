import styled from "styled-components";
import Heading from "../components/texts/Heading";
import DesignBall from "../components/ornoments/DesignBall";
import Accordion from "../components/accordion/Accordion";
import useReveal from "../../hooks/useReveal";

const StyledSection = styled.section`
  margin: 25rem 4rem 12rem 4rem;

  display: flex;
  flex-direction: column;

  gap: 6rem;

  opacity: 0;
  transition: all 1s;

  @media (max-width: 610px) {
    margin: 25rem auto 12rem auto;
  }
`;

const StyledHeading = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const FAQSection = () => {
  const { isRevealed, targetRef } = useReveal();

  return (
    <StyledSection
      id="faqSection"
      ref={targetRef}
      style={isRevealed ? { opacity: "1" } : null}
    >
      <StyledHeading>
        <DesignBall>ball</DesignBall>
        <Heading type="title">سوالات متداول</Heading>
      </StyledHeading>

      <Accordion />
    </StyledSection>
  );
};

export default FAQSection;
