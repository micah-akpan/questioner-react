/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import appUtil from '../../utils';

const { addClasses } = appUtil;

const Dropdown = ({ classList, dropDownItems }) => {
  return (
    <div className={addClasses(classList)}>
      <ul>
      {dropDownItems.map((item) => {
        return (
          <li key={item.id} className={addClasses(item.classList)}>
            <img src={item.icon} alt={item.iconDescription}
            />
            <span>{item.title}</span>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  classList: PropTypes.arrayOf(PropTypes.string),
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconDescription: PropTypes.string,
    classList: PropTypes.arrayOf(PropTypes.string)
  })).isRequired
}

export default Dropdown;
