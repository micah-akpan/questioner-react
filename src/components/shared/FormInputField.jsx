import React from 'react';
import PropTypes from 'prop-types';

const FormInputField = props => (
  <input {...props} className={props.classes} data-testid="form-input-field" />
);

FormInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'on'])
};

export default FormInputField;
