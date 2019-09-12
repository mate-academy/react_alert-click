import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ handleClick, className, title }) => (
  <button
    type="button"
    onClick={handleClick}
    className={className}
  >
    {title}
  </button>
);

Button.defaultProps = {
  title: 'Default Title',
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Button;
