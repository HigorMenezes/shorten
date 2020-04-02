import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

const Button = ({ type, ...props }) => <StyledButton type={type} {...props} />;

Button.propTypes = {
  props: PropTypes.shape({}),
  type: PropTypes.string,
};

Button.defaultProps = {
  props: {},
  type: "button",
};

export default Button;
