import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <main>
      <GlobalStyles />
      <p>Hello!</p>
    </main>
  );
}

export default App;
