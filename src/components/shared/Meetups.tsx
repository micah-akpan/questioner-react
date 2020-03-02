import React from 'react';
import PropTypes from 'prop-types';
import Meetup from './Meetup';

const Meetups = ({ meetups }) => {
  console.log('meetups: ', meetups)
  return (
    <section className="q-cards" id="q-cards">
      <div className="container">

        {/* Shimmer */}
        {
          meetups.length === 0 || meetups == null ?
            <div className="cards shimmer-cards">
              {
                Array(6).fill(0).map(_ => {
                  return (
                    <div className="shimmer-card loading-card">
                      <div className="shimmer-image loading-card"></div>
                      <div className="shimmer-bar-1 shimmer-bar loading-card"></div>
                      <div className="shimmer-bar-2 shimmer-bar loading-card"></div>
                    </div>
                  )
                })
              }
            </div> :
            <div className="cards">
              {meetups.map(meetup => (
                <Meetup meetup={meetup} key={meetup.id} />
              ))}
            </div>
        }
      </div>
    </section>
  )
}

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
