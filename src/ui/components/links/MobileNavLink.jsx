import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMobileNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    padding: 0.5rem 4rem;

    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-blue);
    border-radius: 10px;

    font-size: 3rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-purewhite);
    background-color: var(--color-blue);

    border-radius: 10px;
  }
`;

export default StyledMobileNavLink;
