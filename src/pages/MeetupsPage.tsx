import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchNav from '../components/SearchNav';
import Meetups from '../components/shared/Meetups';
import { getMeetups } from '../actions/meetups';
import { setActivePage } from '../actions/nav';

const hideSearchForm = (evtTarget, {
  searchFormIsVisible,
  setSearchFormVisibility,
  searchNavRef
}) => {
  if (searchNavRef && !searchNavRef.contains(evtTarget) && searchFormIsVisible) {
    setSearchFormVisibility(false);
  }
};

const MeetupsPage = ({ meetups, getMeetups, setActivePage }) => {
  let searchNavRef;
  const [searchFormIsVisible, setSearchFormVisibility] = useState(false);
  useEffect(() => {
    window.addEventListener('click', evt => {
      hideSearchForm(evt.target, {
        searchFormIsVisible,
        searchNavRef,
        setSearchFormVisibility
      });
    }, false);
    return window.removeEventListener('click', () => {});
  });

  useEffect(() => {
    setActivePage()
    getMeetups();
  }, []);

  const getSearchNavRef = node => {
    searchNavRef = node;
  };
  return (
    <>
      <SearchNav
        searchFormIsVisible={searchFormIsVisible}
        handleSearchIconClick={
          useCallback(() => {
            setSearchFormVisibility(!searchFormIsVisible);
          }, [])
        }
        getSearchNavRef={getSearchNavRef}
      />
      <Meetups meetups={meetups} />
    </>
  );
};

const mapStateToProps = ({ meetups, questions }) => ({
  meetups: meetups.data,
  questions: questions.data
});

const mapDispatchToProps = (dispatch) => ({
  setActivePage: () => dispatch(setActivePage('meetupList')),
  getMeetups,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsPage);
