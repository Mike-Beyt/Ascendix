import styled from "styled-components";
import Heading from "../components/texts/Heading";
import DesignBall from "../components/ornoments/DesignBall";
import P from "../components/texts/P";
import HIWCard from "../components/cards/HIWCard";
import useReveal from "../../hooks/useReveal";

const StyledSection = styled.section`
  height: 60rem;
  display: grid;
  margin: 16rem 8rem;
  padding: 4rem;
  grid-template-columns: 1fr 2fr;
  opacity: 0;
  transition: all 1s;

  @media (max-width: 1440px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-row-gap: 8rem;
  }
  @media (max-width: 1040px) {
    margin: 16rem 2rem;
  }

  @media (max-width: 610px) {
    margin: 10rem auto;
  }
`;

const StyledcolumnText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 5rem;
`;

const StyledcolumnCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1040px) {
    flex-wrap: wrap;
    gap: 8rem;
  }
`;

const StyledDivCard = styled.div`
  align-self: flex-start;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const HIWSection = () => {
  const { isRevealed, targetRef } = useReveal();

  return (
    <StyledSection
      id="hiwSection"
      ref={targetRef}
      style={isRevealed ? { opacity: "1" } : null}
    >
      <StyledcolumnText>
        <StyledHeading>
          <DesignBall>ball</DesignBall>
          <Heading type="title">چرا اسندیکس ؟</Heading>
        </StyledHeading>

        <P color="text">
          یادگیری زبان انگلیسی همواره برای شمایک چالش بزرگ بوده؟ جای نگرانی
          نیست. ما اینجا هستیم که به روشی نو و البته اثرگذار و با تکیه بر
          تجربیات اساتیدمان، منابع آموزشی به روز و منحصر بفرد و یک برنامه‌ریزی
          تخصصی به شما کمک کنیم. ما به پیگیری دقیق و پشتیبانی مستمر باور داریم و
          خود را موظف می‌دانیم فرصتی برایتان فراهم کنیم تا در انتهای مسیری که
          برای شما طراحی می‌شود به موفقیت دست پیدا کنید
        </P>
      </StyledcolumnText>

      <StyledcolumnCards>
        <HIWCard
          img="../../../public/f126ee47-45b5-423a-9181-a1d801e42e23.png"
          textone=" متدهای آموزش و"
          texttwo=" برنامه‌ریزی منحصر بفرد"
        />
        <StyledDivCard>
          <HIWCard
            img="../../../public/e747c81b-b50d-4ce9-bb2c-3034807cd6fe.png"
            textone=" اساتید مجرب و"
            texttwo="متخصص"
          />
        </StyledDivCard>

        <HIWCard
          img="../../../public/1ccb4509-21f3-44f5-be35-69de5bfc0001.png"
          textone=" منابع آموزشی به روز و"
          texttwo="ارزشمند"
        />
      </StyledcolumnCards>
    </StyledSection>
  );
};

export default HIWSection;
