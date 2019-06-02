import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ links, classList }) => (
  <section className={classList}>
    <nav className="q-sidenav__menu" id="q-sidenav__menu">
      <ul>
        {links.map(link => (
          <li key={link.id} className="q-sidenav__menu-item">
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

MobileNavMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default MobileNavMenu;
