import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
    
          <Footer />
        </StyledMainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
