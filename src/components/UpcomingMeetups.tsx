import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions/meetups';
import CardTop from './shared/CardTop';
import CardBottom from './shared/CardBottom';

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
            <div key={meetup.id} className="q-card q-card__no-border">
              <CardTop>
                <div className="q-card__image-container">
                  <img
                    src="https://questioner-storage.s3.us-east-2.amazonaws.com/images/home/startup-meetup.jpg"
                    alt=""
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
            </div>
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
