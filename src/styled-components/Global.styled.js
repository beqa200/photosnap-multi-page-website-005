import { createGlobalStyle } from "styled-components";

export const GLobalStyled = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        height: ${({height}) => height};
        overflow-y: ${({over}) => over};
    }
`