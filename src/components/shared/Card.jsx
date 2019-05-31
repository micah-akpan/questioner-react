import React from 'react';
import PropTypes from 'prop-types';
import appUtil from '../../utils';

// Generic card component
const Card = ({ children, classList }) => (
  <div className={appUtil.addClasses(classList)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  classList: PropTypes.arrayOf(PropTypes.string)
};

export default Card;
