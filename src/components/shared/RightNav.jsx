import React from 'react';
import PropTypes from 'prop-types';

const RightNav = ({ children, classList }) => (
  <nav className="right-nav q-right-nav app-main-nav">
    {children}
  </nav>
);

RightNav.propTypes = {
  children: PropTypes.node,
  classList: PropTypes.arrayOf(PropTypes.string)
};

export default RightNav;
