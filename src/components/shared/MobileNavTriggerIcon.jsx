import React from 'react';
import PropTypes from 'prop-types';

const MobileNavTriggerIcon = ({ handleClick, handleKeyPress, classList }) => (
  <div
    className={classList}
    onClick={handleClick}
    onKeyDown={handleKeyPress}
    role="button"
    tabIndex="0"
    data-testid="mobile-nav-trigger-icon"
  >
    <div className="menu-bar1" />
    <div className="menu-bar2" />
    <div className="menu-bar3" />
  </div>
);

MobileNavTriggerIcon.propTypes = {
  handleClick: PropTypes.func,
  handleKeyPress: PropTypes.func,
  classList: PropTypes.string
};

export default MobileNavTriggerIcon;
