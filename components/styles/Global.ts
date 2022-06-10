import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    p{
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
    a{
      text-decoration:none;
    }
    a,button {
    font-family: "Livvic", sans-serif;
    }
`;

export default GlobalStyles;
