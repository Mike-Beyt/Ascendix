import { createGlobalStyle } from "styled-components";
import "./fonts/Yekan.css";

const GlobalStyles = createGlobalStyle`

:root {
  --color-blue:#303481;
  --color-lightblue:#D6EFF2;
  --color-yellow:#FFF200;
  --color-white:#F0F0F0;
  --color-purewhite:#ffffff;


  --backdrop-color: rgba(0, 0, 0, 0.8);
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin:0 ;
}


html {
  font-size: 62.5%;
}



body {
  font-family: "Yekan", sans-serif;
  background-color:var(--color-white);

  direction:rtl;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow-x:hidden;
 
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-size:5rem;
}

img {
  max-width: 100%;

 
}

`;

export default GlobalStyles;
