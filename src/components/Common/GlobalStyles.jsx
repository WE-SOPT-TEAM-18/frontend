import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: #141414;
    color: #FFFFFF;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
