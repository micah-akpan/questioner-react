import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ links }) => (
  <section id="mobile-nav-menu__wrapper">
    <div className="sidebar-menu__wrapper">
      <nav className="q-sidenav__menu" id="q-sidenav__menu">
        <ul>
          {links.map(link => (
            <Link to={link.url} key={link.id}>{link.title}</Link>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);

MobileNavMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default MobileNavMenu;
