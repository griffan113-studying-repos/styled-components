import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/ui/Themes";
import themeOff from "./assets/images/themeOn.svg";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/globalStyle";
import { BtnTema, Icone } from "./Components/ui/index.js";
import SwitchTema from "./Components/SwitchTema/index.jsx";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          {/* <SwitchTema tema={tema} /> */}
          <Icone src={themeOff} alt="" />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
