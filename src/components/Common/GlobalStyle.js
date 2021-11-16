import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #141414;
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  body, button {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
