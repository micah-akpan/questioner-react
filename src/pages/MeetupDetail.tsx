import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../actions/nav';

const MeetupDetailPage = ({ match, dispatch }) => {
  console.log('match props: ', match);

  useEffect(() => {
    dispatch(setActivePage('meetupDetail'));
  }, []);
  return (
    <div>
            Welcome to the meetup detail page for meetup:
    </div>
  );
};


const mapStateToProps = state => ({
  nav: state.nav.pages
});

export default connect(mapStateToProps, null)(MeetupDetailPage);
