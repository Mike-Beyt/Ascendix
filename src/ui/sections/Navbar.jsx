import styled, { keyframes } from "styled-components";

import StyledNavlink from "../components/links/NavLink";
import Button from "../components/buttons/button";
import { LuLogIn } from "react-icons/lu";
import MobileNav from "./MobileNav";
import useStickyNavbar from "../../hooks/useStickyNavbar";

const animationSlideIn = keyframes`
  0%{
    transform:translateX(100%);
    opacity:0
  }

  80%{
    opacity:0.5
  }

  100%{
    transform:translateX(0);
    opacity:1
  }
`;

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

const StyledNav = styled.nav`
  background-color: var(--color-white);
  height: 15vh;

  padding: 3rem 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    animation: ${animationBlur} 1s ease-in-out;
    width: 20rem;
  }

  @media (max-width: 610px) {
    padding: 0 2rem;
    // margin: 0 2rem;

    & img {
      width: 15rem;
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  animation: ${animationSlideIn} 0.9s ease-in-out;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Navbar = () => {
  const { isSticky } = useStickyNavbar();

  return (
    <StyledNav
      style={
        isSticky
          ? {
              position: "sticky",
              backgroundColor: "#F0F0F0",
              zIndex: "990",
              top: "0",
              boxShadow: " 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.15)",
              transition: "all 0.2s",
              opacity: "0.9",
            }
          : {
              backgroundColor: "#F0F0F0",
            }
      }
    >
      <MobileNav />

      <StyledUl>
        <Button type="login">
          <LuLogIn />
          ورود
        </Button>
        <StyledNavlink to="x">خانه</StyledNavlink>
        <StyledNavlink to="z">اساتید</StyledNavlink>
        <StyledNavlink to="z">قیمت</StyledNavlink>
        <StyledNavlink to="y">دوره</StyledNavlink>
      </StyledUl>

      <img src="../../../public/Ascendix-logo (2).png" />
    </StyledNav>
  );
};

export default Navbar;
