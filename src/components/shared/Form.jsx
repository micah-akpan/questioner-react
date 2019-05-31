import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, handleFormSubmit, classList }) => (
  <form
    className={{ ...classList }}
    onSubmit={handleFormSubmit}
  >
    {children}
  </form>
);

export default Form;
