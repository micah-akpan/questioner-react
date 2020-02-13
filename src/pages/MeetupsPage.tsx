import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MeetupsPageNavBar from '../components/MeetupsPageNavBar';
import SearchNav from '../components/SearchNav';
import Meetups from '../components/shared/Meetups';
import { getMeetups } from '../actions/meetups';
import { getQuestions } from '../actions/questions';

const hideSearchForm = (evtTarget, {
  searchFormIsVisible,
  setSearchFormVisibility,
  searchNavRef
}) => {
  if (searchNavRef && !searchNavRef.contains(evtTarget) && searchFormIsVisible) {
    setSearchFormVisibility(false);
  }
};

const MeetupsPage = ({ meetups, getMeetups }) => {
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
    return window.removeEventListener('click', hideSearchForm);
  });

  useEffect(() => {
    getMeetups();
  }, []);

  const getSearchNavRef = node => {
    searchNavRef = node;
  };
  return (
    <Fragment>
      <header className="app-main-header">
        <div className="container">
          <div>
            <MeetupsPageNavBar
              classes="header-content header__no-border"
            />
          </div>
        </div>
      </header>
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
    </Fragment>
  );
};

const mapStateToProps = ({ meetups, questions }) => ({
  meetups: meetups.data,
  questions: questions.data
});

export default connect(mapStateToProps, { getMeetups })(MeetupsPage);
