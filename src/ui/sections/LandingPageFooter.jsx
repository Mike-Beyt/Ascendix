import styled from "styled-components";
import Form from "../../features/form/Form";
import DesignBall from "../components/ornoments/DesignBall";
import Heading from "../components/texts/Heading";
import P from "../components/texts/P";
import StyledFooterlink from "../components/links/FooterLink";
import useReveal from "../../hooks/useReveal";

const StyledFooter = styled.footer`
  position: relative;
  margin: 0 4rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr;

  opacity: 0;
  transition: all 1s;

  @media (max-width: 610px) {
    margin: 0 0;
  }
`;

const StyledFormBox = styled.div`
  width: 40%;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1267px) {
    width: 100%;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const StyledFooterBox = styled.div`
  background-color: var(--color-blue);

  border-radius: 3.2rem 3.2rem 0 0;

  padding: 6rem 4rem;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: flex-start;
  align-items: center;

  @media (max-width: 1267px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 976px) {
    grid-template-columns: 1fr;
    justify-items: center;

    grid-row-gap: 10rem;

    border-radius: 3.2rem 3.2rem 0 0;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 976px) {
    align-items: center;
  }
`;

const StyledLinkBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;

  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 1267px) {
    width: 80%;
  }

  @media (max-width: 976px) {
    justify-content: center;
  }
`;

const LandingFooter = () => {
  const { isRevealed, targetRef } = useReveal();

  return (
    <StyledFooter ref={targetRef} style={isRevealed ? { opacity: "1" } : null}>
      <StyledFormBox>
        <StyledHeading>
          <DesignBall>ball</DesignBall>
          <Heading type="title">نیاز به مشاوره داری؟</Heading>
        </StyledHeading>

        <P color="text">
          به ما اجازه دهید در رسیدن به اهداف و رویاهایتان به شما کمک کنیم. اگر
          نیاز به زاهنمایی، اطلاعات تکمیلی و دقیق‌تر در مورد دوره‌هاپاسخ برای
          سوالات خود در زمینه یادگیری زبان و شناخت بهتر از منابع آموزشی ما
          دارید، این فرم را پر کنید و منتظر تماس مشاوران ما باشید.
        </P>
      </StyledFormBox>

      <StyledFooterBox>
        <Form />

        <StyledBox>
          <img src="../../../public/Ascendix-logo (2).png" />

          <StyledLinkBox>
            <StyledFooterlink>درباره ما</StyledFooterlink>
            <StyledFooterlink> تماس با ما</StyledFooterlink>
            <StyledFooterlink>درباره ما</StyledFooterlink>
            <StyledFooterlink> تماس با ما</StyledFooterlink>
            <StyledFooterlink>درباره ما</StyledFooterlink>
            <StyledFooterlink> تماس با ما</StyledFooterlink>
          </StyledLinkBox>
        </StyledBox>
      </StyledFooterBox>
    </StyledFooter>
  );
};

export default LandingFooter;
