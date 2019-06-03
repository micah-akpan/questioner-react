import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardTop from './CardTop';
import CardBottom from './CardBottom';
import mainMeetupImage from '../../resources/images/andela.jpeg';

const MeetupCard = ({ meetup, questionCount }) => (
  <Card classList={['q-card']}>
    <CardTop>
      <div>
        <div className="q-card__image-container">
          <img
            src={mainMeetupImage}
            alt="A meetup"
            className="q-card__image meetup-main-image"
          />
        </div>
        <span className="q-asked-count">
          {questionCount}
        </span>
      </div>
    </CardTop>
    <CardBottom>
      <div className="content q-card__sec">
        <p className="meetup-title">{meetup.title}</p>
        <p className="meetup-sched-date">{meetup.createdAt.toString()}</p>
      </div>
    </CardBottom>
  </Card>
);

export default MeetupCard;
