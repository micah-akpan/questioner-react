import React, { useEffect, useRef, useState } from 'react';
import searchIcon from '../resources/icons/search.svg'
import { ListItemState } from '../shared/models'
import { connect } from 'react-redux'
import { searchMeetupsRequest } from '../actions/meetups'

const initialState: ListItemState = {
  'list-item-1': {
    active: false
  },
  'list-item-2': {
    active: false
  }
}

const SearchNav = (props) => {
  let inputRef = useRef();
  const [listItemIsActive, setListItemIsActive] = useState(initialState);
  const [searchFormIsVisible, setSearchFormVisibility] = useState(false);
  const [searchFilter, setSearchFilter] = useState('')

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

  const updateSearchFilter = () => {
    props.dispatch(searchMeetupsRequest(searchFilter))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    props.dispatch(searchMeetupsRequest(searchFilter))
    props.searchMeetup(searchFilter)
  }

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
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search Meetups"
                  className={searchFormIsVisible ? 'show_input' : ''}
                  autoComplete="off"
                  ref={inputRef}
                  onClick={(e) => e.stopPropagation()}
                  onBlur={updateSearchFilter}
                  onChange={(e) => {
                    setSearchFilter(e.target.value)
                  }}
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

export default connect(null, null)(SearchNav);
