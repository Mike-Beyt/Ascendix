import styled from "styled-components";
import CoursesCard from "../components/cards/CoursesCard";
import Heading from "../components/texts/Heading";
import DesignBall from "../components/ornoments/DesignBall";
import useReveal from "../../hooks/useReveal";

const StyledSection = styled.section`
  margin: 16rem 8rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;

  display: flex;
  flex-direction: column;

  gap: 12rem;

  opacity: 0;
  transition: all 1s;

  @media (max-width: 610px) {
    margin: 0 auto;
    gap: 6rem;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CoursesSection = () => {
  const { isRevealed, targetRef } = useReveal();

  return (
    <StyledSection
      id="coursesSection"
      ref={targetRef}
      style={isRevealed ? { opacity: "1" } : null}
    >
      <StyledHeading>
        <DesignBall>ball</DesignBall>
        <Heading type="title"> دوره های ما </Heading>
      </StyledHeading>

      <CoursesCard
        img="../../../../public/ef0923b0-b455-459e-8467-f5a8767afe0b.png"
        dir="rtl"
        text="این دوره به شما کمک میکند تا با بهره‌گیری از راهنمایی معلمانتان و با یک برنامه تخصصی به تسلط کافی برای استفاده از زبان انگلیسی برسید. به شما، از هر رده سنی و با هر سطحی از زبان انگلیسی که اکنون دارید، یک فرصت بی‌نظیر ارائه می‌شود تا مهارت‌های خود را از مبتدی تا پیشرفته بهبود ببخشید"
        persian="انگلیسی عمومی"
        english="General English "
      />

      <CoursesCard
        img="../../../../public/dedd316e-b9f5-4314-8f8f-b21183576025.png"
        dir="ltr"
        text="آزمون آیلتس بعنوان یکی از مهمترین آزمونهای زبان انگلیسی برای مهاجرت، تحصیل یا کار شناخته می‌شود. ما در دوره IELTS اسندیکس به شما استراتژی‌ها و آموزش‌های لازم را برای کسب نمره دلخواهتان ارائه می‌دهیم. با بهره گیری از تجربه ما در زمینه آموزش آزمون آیلتس و منابع یکتایی که در اختیارتان قرار می‌دهیم،‌ می‌توانید مهارت‌های چهارگانه (Speaking, Reading, Listening, Writing) خود را بهبود ببخشید."
        persian=" آزمون آیلس"
        english="IELTS "
      />
    </StyledSection>
  );
};

export default CoursesSection;
