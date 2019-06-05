import React from 'react';
import PropTypes from 'prop-types';
import Meetup from './Meetup';

const Meetups = ({ meetups }) => (
  <section className="q-cards" id="q-cards">
    <div className="container">
      <div className="cards">
        {meetups.map(meetup => (
          <Meetup meetup={meetup} key={meetup.id} />
        ))}
      </div>
    </div>
  </section>
);

Meetups.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    happeningOn: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string
  }))
};

export default Meetups;
