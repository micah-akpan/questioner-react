import React from 'react';
import PropTypes from 'prop-types';

const CardBottom = ({ children }) => (
  <div className="q-card__bottom">
    {children}
  </div>
);

CardBottom.propTypes = {
  children: PropTypes.node
};

export default CardBottom;
