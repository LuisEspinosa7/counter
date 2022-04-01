import { ThemeProvider } from "styled-components";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { StyledAppContainer } from "./components/styles/containers/AppContainer.styled";
import { StyledMainContainer } from "./components/styles/containers/MainContainer.styled";
import GlobalStyles from "./components/styles/general/Global.styled";
import { theme } from './themes/standard';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledMainContainer>
          <Header />
          <StyledAppContainer 
            gridArea="content" 
            height="77vh"
            maxWidth="100%">
              <Counter />
          </StyledAppContainer>
          <Footer />
        </StyledMainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
