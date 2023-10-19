import CoursesSection from "../sections/CoursesSection";
import FAQSection from "../sections/FAQSection";
import HIWSection from "../sections/HIWSection";
import HeroSection from "../sections/HeroSection";
import StudentsSection from "../sections/StudentsSection";

const LandingPageLayout = () => {
  return (
    <>
      <HeroSection />
      <HIWSection />
      <CoursesSection />
      <StudentsSection />
      <FAQSection />
    </>
  );
};

export default LandingPageLayout;
