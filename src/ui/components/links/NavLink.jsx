import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    padding: 0.2rem 3rem;

    color: var(--color-blue);
    font-size: 3rem;
    font-weight: 500;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-blue);

    border-bottom: 1px solid var(--color-blue);
  }
`;

export default StyledNavlink;
