import React from 'react';
import PropTypes from 'prop-types';

const CardTop = ({ children }) => (
  <div className="q-card__top">
    {children}
  </div>
);

CardTop.propTypes = {
  children: PropTypes.node
};

export default CardTop;
