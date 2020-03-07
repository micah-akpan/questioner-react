import React from 'react';
import PropTypes from 'prop-types';

// Generic card component
const Card = ({ children }) => (
  // TODO: Consider moving the Link component here to wrap these
  <div>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
