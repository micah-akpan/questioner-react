import React from 'react';
import PropTypes from 'prop-types';
import Meetup from './Meetup';

const Meetups = ({ meetups }) => (
  <div>
    {meetups.map(meetup => (
      <Meetup meetup={meetup} />
    ))}
  </div>
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
