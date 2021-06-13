import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../actions/nav';
import { gql, useApolloClient } from '@apollo/client'
import { useParams } from 'react-router-dom'

const MeetupDetail = ({ dispatch }) => {
  const { id: page } = useParams()
  const client = useApolloClient()
  const meetup = client.readFragment({
    id: `Meetup:${page}`,
    fragment: gql`
      fragment MeetupX on Meetup {
        id
        topic
        happeningOn
      }
    `
  })

  useEffect(() => {
    // dispatch(setActivePage('meetupDetail'));
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

export default connect(mapStateToProps, null)(MeetupDetail);
