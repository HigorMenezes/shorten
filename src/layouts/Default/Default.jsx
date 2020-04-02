import React from "react";
import PropTypes from "prop-types";

import Title from "../../components/Title";

import { Container, Header, Main, Footer } from "./Default.style";

const Default = ({ children }) => (
  <Container>
    <Header>
      <Title>Shorten</Title>
    </Header>
    <Main>{children}</Main>
    <Footer>
      Powered by&nbsp;
      <a
        href="https://github.com/HigorMenezes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Higor Menezes
      </a>
    </Footer>
  </Container>
);

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
