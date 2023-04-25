import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;700&family=DM+Sans:ital,wght@0,700;1,400&family=League+Spartan:wght@400;500;600;700&family=Lobster&family=Space+Grotesk:wght@300;500&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'DM Sans', sans-serif;
    height:100vh;
    background-color:#F2F2F2;
    display:flex;
    justify-content:center;
  }
  *{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;




