import React from 'react';
import PropTypes from 'prop-types';

const LeftNav = ({ children, classes }) => (
  <nav className="left-nav q-left-nav">{children}</nav>
);

LeftNav.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
};

export default LeftNav;
