/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../resources/icons/search.svg';
import appUtil from '../utils';

const { addClasses } = appUtil;

const SearchNav = ({ handleSearchIconClick, searchFormIsVisible, getSearchNavRef }) => {
  let inputRef;
  let searchNavRef;
  const [listItemIsActive, setListItemIsActive] = useState({
    'list-item-1': {
      active: false
    },
    'list-item-2': {
      active: false
    }
  });

  const toggleNavLink = evt => {
    const selectedButton = evt.target.getAttribute('data-target');
    setListItemIsActive({
      [selectedButton]: {
        active: true
      }
    });
  };

  useEffect(() => {
    inputRef.focus();
  }, [searchFormIsVisible])
  return (
    <section 
      id="q-search" 
      className="q-search" 
      ref={node => { getSearchNavRef(node); }}
    >
      <div className="container">
        <nav className="q-search__nav">
          <ul>
            <li className="search-form__container">
              <button
                id="search-icon"
                type="button"
                onClick={handleSearchIconClick}
                data-testid="search-icon"
              >
                <img
                  src={searchIcon}
                  alt="A magnifying glass icon"
                />
              </button>
            </li>

            <li 
              className={addClasses(['search-bar__link', searchFormIsVisible && 'search-bar__link-show'])}
              data-testid="search-form-list-item"
            >
              <form>
                <input
                  type="search"
                  name="search-term"
                  placeholder="Search Meetups"
                  className={searchFormIsVisible ? 'show_input' : ''}
                  autoComplete="off"
                  ref={node => { inputRef = node; }}
                />
              </form>
            </li>

            <li>
              <button
                type="button"
                className={listItemIsActive['list-item-1'] && listItemIsActive['list-item-1'].active ? 'active_link' : ''}
                data-target="list-item-1"
                onClick={toggleNavLink}
              >
                All
                </button>
            </li>

            <li>
              <button
                type="button"
                data-target="list-item-2"
                onClick={toggleNavLink}
                className={listItemIsActive['list-item-2'] && listItemIsActive['list-item-2'].active ? 'active_link' : ''}>
                 Favorites
                </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SearchNav;
