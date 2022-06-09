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
`;

export default GlobalStyles;
