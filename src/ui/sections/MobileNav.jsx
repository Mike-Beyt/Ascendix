/* eslint-disable react/prop-types */
import { HiViewList } from "react-icons/hi";
import Button from "../components/buttons/button";
import Modal from "../components/modal/Modal";
import styled from "styled-components";
// import StyledNavlink from "../components/links/NavLink";
import { LuLogIn } from "react-icons/lu";
import StyledMobileNavLink from "../components/links/MobileNavLink";

const StyledMenu = styled.nav`
  max-width: 30rem;
  border-radius: 3.2rem;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Nav = ({ onCloseModal }) => {
  return (
    <StyledMenu>
      <StyledMobileNavLink to="x" onClick={() => onCloseModal?.()}>
        خانه
      </StyledMobileNavLink>
      <StyledMobileNavLink to="y" onClick={() => onCloseModal?.()}>
        اساتید
      </StyledMobileNavLink>
      <StyledMobileNavLink to="z" onClick={() => onCloseModal?.()}>
        قیمت
      </StyledMobileNavLink>
      <StyledMobileNavLink to="h" onClick={() => onCloseModal?.()}>
        دوره
      </StyledMobileNavLink>

      <Button type="login">
        <LuLogIn />
        ورود
      </Button>
    </StyledMenu>
  );
};

const MobileNav = () => {
  return (
    <Modal>
      <Modal.Open opens="mobileNav">
        <Button type="menu">
          <HiViewList />
        </Button>
      </Modal.Open>

      <Modal.Window name="mobileNav">
        <Nav />
      </Modal.Window>
    </Modal>
  );
};

export default MobileNav;
