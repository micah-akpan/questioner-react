import React from 'react';
import PropTypes from 'prop-types';

const FormInputField = props => (
  <input {...props} className={props.classes} />
);

FormInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  handleTextChange: PropTypes.func,
  classes: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool
};

export default FormInputField;
