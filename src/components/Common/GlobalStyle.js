import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 36rem;

    @media ${({ theme }) => theme.device.tablet} {
      margin: 0;
    }
  }

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
