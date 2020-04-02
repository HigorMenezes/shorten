import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./Input.style";

const Input = ({ ...props }) => <StyledInput {...props} />;

Input.propTypes = {
  props: PropTypes.shape({}),
};

Input.defaultProps = {
  props: {},
};

export default Input;
