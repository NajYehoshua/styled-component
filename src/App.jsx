import StyledBody from "./components/StyledBody";
import GlobalStyle from "./components/GlobalStyle";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledBody>
        <h1>Application</h1>
        <Container />
      </StyledBody>
    </>
  );
};

export default App;
