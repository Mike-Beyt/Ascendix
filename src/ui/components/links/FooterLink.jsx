import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooterlink = styled(Link)`
  &:link,
  &:visited {
    padding: 0.2rem 3rem;

    color: var(--color-purewhite);
    font-size: 2rem;
    font-weight: 500;
    border: none;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-purewhite);

    border-bottom: 1px solid var(--color-purewhite);
  }
`;

export default StyledFooterlink;
