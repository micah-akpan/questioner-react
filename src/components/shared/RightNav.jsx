import React from 'react';
import PropTypes from 'prop-types';

const RightNav = ({ children, classList }) => (
  <nav className={classList}>
    {children}
  </nav>
);

RightNav.defaultProps = {
  classList: 'right-nav q-right-nav app-main-nav'
};

RightNav.propTypes = {
  children: PropTypes.node,
  classList: PropTypes.string
};

export default RightNav;
