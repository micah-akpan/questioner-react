import React, { useEffect, useRef, useState } from 'react';
import searchIcon from '../resources/icons/search.svg'

interface ListItemState {
  [key: string]: {
    active: boolean
  }
}

const initialState: ListItemState = {
  'list-item-1': {
    active: false
  },
  'list-item-2': {
    active: false
  }
}

const SearchNav = () => {
  let inputRef = useRef();
  const [listItemIsActive, setListItemIsActive] = useState(initialState);
  const [searchFormIsVisible, setSearchFormVisibility] = useState(false);

  const toggleNavLink = evt => {
    const selectedButton = evt.target.getAttribute('data-target');
    setListItemIsActive({
      [selectedButton]: {
        active: true
      }
    });
  };

  useEffect(() => {
    addEventListener('click', () => {
      if (searchFormIsVisible) setSearchFormVisibility(false)
    });
    return () => removeEventListener('click', () => null);
  });

  useEffect(() => {
    inputRef?.current?.focus();
  }, [searchFormIsVisible])
  
  return (
    <section
      id="q-search"
      className="q-search"
    >
      <div className="container">
        <nav className="q-search__nav">
          <ul>
            <li className="search-form__container">
              <button
                id="search-icon"
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchFormVisibility(!searchFormIsVisible)
                }
                }
                data-testid="search-icon"
              >
                <img
                  src={searchIcon}
                  alt="A magnifying glass icon"
                />
              </button>
            </li>

            <li
              className={`search-bar__link ${searchFormIsVisible ? 'search-bar__link-show' : ''}`}
              data-testid="search-form-list-item"
            >
              <form>
                <input
                  type="search"
                  name="search-term"
                  placeholder="Search Meetups"
                  className={searchFormIsVisible ? 'show_input' : ''}
                  autoComplete="off"
                  ref={inputRef}
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
