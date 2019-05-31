import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthRightNavBar = ({ links, classList }) => (
  <ul>
    {links.map((link, i) => (
      <li key={link.id}>
        <Link to={link.url} role="button" aria-label={`${link.title} button`} className="main-nav-block__link">{link.title}</Link>
      </li>
    ))}
  </ul>
);

AuthRightNavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  })),
  classList: PropTypes.arrayOf(PropTypes.string)
};

export default AuthRightNavBar;
