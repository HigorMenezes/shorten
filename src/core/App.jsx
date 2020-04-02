import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

import Shorten from "../screens/Shorten";

import theme from "../styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Shorten />
  </ThemeProvider>
);

export default App;
