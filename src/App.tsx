import { createGlobalStyle } from "styled-components";
import Canvas from "./lib/scenes/canvas/canvas";

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
      <Canvas />
    </main>
  );
}

export default App;
