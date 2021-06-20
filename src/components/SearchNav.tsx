import React, { useEffect, useRef, useState } from 'react';
import { ListItemState } from '../shared/models'
import { connect } from 'react-redux'
import { searchMeetupsRequest } from '../actions/meetups'
// import searchIcon from '../resources/icons/search.svg';
import classNames from 'classnames'

const initialState: ListItemState = {
  'list-item-1': {
    active: false
  },
  'list-item-2': {
    active: false
  }
}

const SearchNav = (props) => {
  let inputRef = useRef<HTMLInputElement>();
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
    inputRef.current?.focus()
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
                  src="/src/resources/icons/search.svg"
                  alt="A magnifying glass icon"
                />
              </button>
            </li>

            <li
              className={classNames('search-bar__link',
                { 'search-bar__link-show': searchFormIsVisible })}
              data-testid="search-form-list-item"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  placeholder="Search Meetups"
                  className={classNames({ 'show_input': searchFormIsVisible })}
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
                className={
                  classNames({ 'active_link': listItemIsActive['list-item-1']?.active })
                }
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
                className={
                  classNames({ 'active_link': listItemIsActive['list-item-2']?.active })}>
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
