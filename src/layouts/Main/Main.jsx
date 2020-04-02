import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Main.style";

const Main = ({ children }) => (
  <Container>
    <header>
      <h1>Shorten</h1>
    </header>
    <main>{children}</main>
    <footer />
  </Container>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
