import React from 'react';
import PropTypes from 'prop-types';
import appUtil from '../../utils'

// Generic card component
const Card = ({ children, classList }) => (
  // TODO: Consider moving the Link component here to wrap these
  <div className={appUtil.addClasses(classList)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  classList: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
