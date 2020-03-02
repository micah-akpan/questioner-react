import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ links, mobileNavIsVisible }) => (
  <section className={`mobile-nav-menu__wrapper ${mobileNavIsVisible ? 'nav-menu-show' : ''}`} data-testid="mobile-sidenav">
    <nav
      className="q-sidenav__menu"
    >
      <ul>
        {links.map(link => (
          <li key={link.title} className="q-sidenav__menu-item">
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

MobileNavMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  mobileNavIsVisible: PropTypes.bool.isRequired,
};

export default MobileNavMenu;
