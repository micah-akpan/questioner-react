import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MobileNavMenu = ({ links, mobileNavIsVisible }) => (
  <section className={
    classNames('mobile-nav-menu__wrapper', {
      'nav-menu-show': mobileNavIsVisible
    })} data-testid="mobile-sidenav">
    <nav className="q-sidenav__menu">
      <ul>
        {links.map(link => (
          <li key={link.url} className="q-sidenav__menu-item">
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
