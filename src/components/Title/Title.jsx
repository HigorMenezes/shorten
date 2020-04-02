import React from "react";
import PropTypes from "prop-types";
import { Heading } from "./Title.style";

const Title = ({ children }) => <Heading>{children}</Heading>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
