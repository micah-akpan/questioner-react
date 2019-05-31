import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import CardTop from './shared/CardTop';
import CardBottom from './shared/CardBottom';
import image from '../resources/images/startup-meetup2.jpg';

const UpcomingMeetupCard = ({ meetup }) => (
  <Card classList={['q-card q-card__no-border']}>
    <CardTop>
      <div className="q-card__image-container">
        <img
          src={image}
          alt="A meetup"
          className="q-card__image"
        />
      </div>
    </CardTop>
    <CardBottom>
      <div className="meetup-details">
        <div className="meetup-details__sec">
          <p className="date__sec_month">JAN
            <br />
            <span className="date__sec_date">24</span>
          </p>
        </div>

        <div className="meetup-details__primary">
          <h3 className="title">{meetup.title}</h3>
          <span className="place">{meetup.location}</span>
          <span className="date__primary">{meetup.createdAt}</span>
        </div>
      </div>
    </CardBottom>
  </Card>
);

UpcomingMeetupCard.propTypes = {
  meetup: PropTypes.shape({
    topic: PropTypes.string,
    location: PropTypes.string,
    createdAt: PropTypes.string
  })
};

export default UpcomingMeetupCard;
