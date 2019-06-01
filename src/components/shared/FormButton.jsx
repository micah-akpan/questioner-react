import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ text, classList }) => (
  <button
    type="submit"
    className={classList}
  >
    {text}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string,
  classList: PropTypes.string
};

export default FormButton;
