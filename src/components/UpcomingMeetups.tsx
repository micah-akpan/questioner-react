import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions/meetups';
import Card from './shared/Card';
import CardTop from './shared/CardTop';
import CardBottom from './shared/CardBottom';
import image from '../resources/images/startup-meetup2.jpg';

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
