import { ThemeProvider } from 'styled-components';
import theme from 'components/Common/theme';
import GlobalStyle from 'components/Common/GlobalStyle';
import Router from 'components/Common/Router';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
