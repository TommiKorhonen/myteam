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
    h1{
      font-weight: 700;
      font-size: 100px;
      line-height: 100px;
    }
    h2{
      font-weight: 700;
      font-size: 48px;
      line-height: 48px;
    }
    a{
      text-decoration:none;
      color: white;
    }
    a,button {
      font-family: "Livvic", sans-serif;
    }
    p{
      max-width: 60ch;
    }
`;

export default GlobalStyles;
