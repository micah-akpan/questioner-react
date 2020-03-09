import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UpcomingMeetupCard from './UpcomingMeetupCard';
import { getMeetups } from '../actions/meetups';

const UpcomingMeetups = ({ meetups, getMeetups }) => {
  useEffect(() => {
    getMeetups();
  }, []);
  return (
    <section className="q-cards">
      <div className="container">
        <h3 className="heading-sec__primary">See meetups near you</h3>
        <div className="cards">
          {meetups.map(meetup => (
            <UpcomingMeetupCard meetup={meetup} key={meetup.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ meetups }) => ({
  meetups: meetups.data
});

const mapDispatchToProps = {
  getMeetups
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMeetups);
