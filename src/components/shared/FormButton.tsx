import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ children, classList, disabled }) => (
  <button
    type="submit"
    className={classList}
    disabled={disabled}
  >
    {children}
  </button>
);

FormButton.propTypes = {
  children: PropTypes.node,
  classList: PropTypes.string
};

export default FormButton;
