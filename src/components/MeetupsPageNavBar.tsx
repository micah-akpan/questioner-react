import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import {
  LeftNav,
  RightNav,
  AuthRightNav
} from './shared';
import appUtil from '../utils';

const { addClasses } = appUtil;

const MeetupsPageNavBar = ({ classes }) => (
  <NavBar classes={classes}>
    <RightNav classList={
        addClasses(['right-nav', 'q-right-nav', 'app-main-nav', 'notify-user__nav', 'no-flex'])
      }
    >
      <ul>
        <li>
          <button
            className="q-btn"
            title="Notifications"
            type="button"
          >
            <img src="src/resources/icons/notifications-button.svg" alt="your notifications" />
          </button>
        </li>
        <li className="q-user-profile__dropdown-trigger">
          <button
            className="q-btn dropdown-trigger-btn"
            title="Profile"
            type="button"
          >
            <img src="src/resources/icons/avatar1.svg" alt="your profile" />
          </button>
        </li>
      </ul>
    </RightNav>
  </NavBar>
);

MeetupsPageNavBar.propTypes = {
  classes: PropTypes.string
};

export default MeetupsPageNavBar;
