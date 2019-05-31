/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ idText, labelText, className }) => (
  <label htmlFor={idText} className={className}>
    {labelText}
  </label>
);

FormLabel.propTypes = {
  idText: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default FormLabel;
