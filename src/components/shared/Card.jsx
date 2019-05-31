import React from 'react';
import PropTypes from 'prop-types';

// Generic card component
const Card = ({ children }) => (
  <div className="q-card q-card__no-border">
    {children}
  </div>
);

export default Card;
