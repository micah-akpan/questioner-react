import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, handleFormSubmit, classList }) => (
  <form
    className={classList}
    onSubmit={handleFormSubmit}
  >
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
  handleFormSubmit: PropTypes.func,
  classList: PropTypes.arrayOf(PropTypes.string)
};

export default Form;
