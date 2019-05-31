import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ classList, children }) => (
  <div className={{ ...classList }}>
    {children}
  </div>
);

FormGroup.propTypes = {
  classList: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
};

export default FormGroup;
