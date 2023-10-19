import styled from "styled-components";
import Heading from "../components/texts/Heading";
import DesignBall from "../components/ornoments/DesignBall";
import P from "../components/texts/P";
import Slider from "../components/slider/Slider";
import AvatarBox from "../components/slider/AvatarBox";
import useGetStudents from "../components/slider/useGetStudents";

const StyledSection = styled.section`
  margin: 16rem 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-column-gap: 16rem;
  grid-row-gap: 16rem;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    margin: 16rem auto;
  }
`;

const StyledText = styled.div`
  padding-right: 2rem;
  display: flex;
  flex-direction: column;

  align-items: start;
  gap: 3rem;

  @media (max-width: 600px) {
    padding-right: 0rem;
    align-items: center;
    padding: 0 2rem;
  }
`;

const StyledHeading = styled.div`
  //align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const StyledSliderColumn = styled.div`
  margin-left: -8rem;

  height: 80%;

  background-color: var(--color-lightblue);

  border-radius: 0rem 50rem 2rem 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    height: 120%;
  }

  @media (max-width: 600px) {
    margin-left: 0rem;
  }
`;

const StudentsSection = () => {
  const { students, isGettingStudents } = useGetStudents();

  if (isGettingStudents) return <p>is Loading</p>;

  return (
    <StyledSection>
      <StyledText>
        <StyledHeading>
          <DesignBall>ball</DesignBall>
          <Heading type="title">نظر زبان آموزان</Heading>
        </StyledHeading>

        <P color="text">
          اگر برای اطمینان به مسیری که اسندیکس پیش پای شما می‌گذارد نیاز به
          اطلاعات بیشتری دارید، نظرات و تجارب واقعی زبان آموزانی را ببینید که از
          تاثیر گذاری و کیفیت آموزش در اسندیکس گفته‌اند.
        </P>

        <AvatarBox students={students} />
      </StyledText>

      <StyledSliderColumn>
        <Slider students={students} />
      </StyledSliderColumn>
    </StyledSection>
  );
};

export default StudentsSection;
