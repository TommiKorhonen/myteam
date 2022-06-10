import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: #014E56;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
    li{
    list-style: none;
    }
    a{
      text-decoration:none;
      color: white;
    }
    a,button {
    font-family: "Livvic", sans-serif;
    }
`;

export default GlobalStyles;
