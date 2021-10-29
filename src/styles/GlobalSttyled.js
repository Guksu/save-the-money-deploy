import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{background-color:#DEF8F9;}

`;

export default GlobalStyles;
