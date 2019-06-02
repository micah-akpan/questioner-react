import React from 'react';
import PropTypes from 'prop-types';

const MobileNavTriggerIcon = ({ handleClick, handleKeyPress }) => (
  <div
    id="mobile-nav-sidebar__wrapper"
    onClick={handleClick}
    onKeyDown={handleKeyPress}
    role="button"
    tabIndex="0"
  >
    <div className="menu-bar1" />
    <div className="menu-bar2" />
    <div className="menu-bar3" />
  </div>
);

MobileNavTriggerIcon.propTypes = {
  handleClick: PropTypes.func,
  handleKeyPress: PropTypes.func
};

export default MobileNavTriggerIcon;
