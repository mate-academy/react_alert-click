import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick }) => (
  <button type="button" onClick={() => onClick()}>Alert</button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;
