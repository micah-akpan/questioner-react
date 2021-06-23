import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Main navbar
const NavBar = ({ classes, children }) => (
  <div className={classes}>
    <div className="white nav-block">
      <Link to="/" className="nav-block__link main-nav-block__link">
        <h1 className="q-logo q-logo-border">Questioner</h1>
      </Link>
    </div>
    {children}
  </div>
);

NavBar.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node
};

export default NavBar;
