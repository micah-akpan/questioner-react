import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { LeftNav, RightNav, AuthRightNav } from './shared';
import appUtil from '../utils';

const { addClasses } = appUtil;

const links = [
  {
    id: '1',
    title: 'login',
    url: '/login',
    className: 'sign-in'
  },
  {
    id: '2',
    title: 'sign up',
    url: '/signup',
    className: 'sign-up'
  }
];

const HomePageNavBar = ({ classes }) => (
  <NavBar classes={classes}>
    <LeftNav classes={addClasses(['q-left-nav', 'app-main-nav'])}>
      <ul className="app-main-nav__list">
        <li className="app-main-nav__list__item q-left-nav__list__item">
          <Link to="/meetups" className="main-nav-block__link q-left-nav__list__item__link">Discover meetups</Link>
        </li>
      </ul>
    </LeftNav>
    <RightNav>
      <AuthRightNav links={links} />
    </RightNav>
  </NavBar>
);

HomePageNavBar.propTypes = {
  classes: PropTypes.string
};

export default HomePageNavBar;
