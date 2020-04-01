import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>Hello</div>
  </ThemeProvider>
);

export default App;
