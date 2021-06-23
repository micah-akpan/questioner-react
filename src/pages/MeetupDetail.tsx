import { useEffect } from 'react';
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
      fragment Meetup on Meetup {
        id
        topic
        location
        happeningOn
      }
    `
  })

  useEffect(() => {
    dispatch(setActivePage('meetupDetail'));
  }, []);
  return (
    <>
      <section id="q-meetup-details__main">
        <div className="container">
          <div className="details-content">
            <div className="meetup-title__wrapper">
              <h3 className="meetup-title">{meetup.topic}</h3>
              <p className="meetup-host">{meetup.location}</p>
            </div>
            <span className="meetup-date__primary"></span>
          </div>
        </div>
      </section>

      <section id="q-meetups-preview">
        <div className="container">
          <div className="q-meetups-preview__block">
            <div className="image-preview">
              <img alt="a group of meetup attendees watching a presentation" className="meetup-image meetup-image--zoom" />

              <section className="meetup-invite-share">
                <div className="meetup-rsvp__enquiry">
                </div>

                <p>Let your friends know about this meetup</p>
                <span className="share-title">Share:</span>
                <div className="share-media-links">
                  <span>
                    <img src="../assets/icons/facebook.svg" alt="facebook logo" />
                  </span>
                  <span>
                    <img src="../assets/icons/twitter (1).svg" alt="twitter logo" />
                  </span>
                  <span>
                    <img src="../assets/icons/instagram.svg" alt="instagram logo" />
                  </span>
                </div>

                <h3>Meetup Details</h3>
                <hr />
                <p className="meetup-description"></p>

                <div className="meetup-location-map__preview" id="meetup-location-map__preview"></div>


                <section id="meetup-image-upload">
                  <h3>Meetup Photos</h3>
                  <hr />
                  <div className="meetup-photos__wrapper">

                  </div>

                </section>

                <section>
                  <div className="meetup-tags" id="meetup-tags">
                    <h3>Meetup Tags</h3>
                    <hr />
                    <div className="meetup-tags-added" id="meetup-tags-added"></div>
                  </div>
                </section>
              </section>
            </div>

            <div className="meetup-details">
              <section className="post-question" id="post-question">
                <div id="post-questions-directive">
                  <h3>Do you have a question?</h3>
                  <button className="q-btn ask-group-btn" id="ask-group-btn">Ask the group</button>
                </div>


                <section id="ask-question">
                </section>
              </section>

              <h3>Questions asked in this meetup</h3>

              <div className="q-question-cards" id="q-question-cards">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meetup floating icons */}
      <div id="meetup-floating-icons">
        <button className="q-btn" title="Favorite Meetup">
          <img src="../assets/icons/like.svg" alt="A red heart icon" />
        </button>

        <button className="q-btn" title="Ask Question" id="ask-question-floating-button">
          <img src="../assets/icons/question.svg" alt="A question mark in a circle" />
        </button>
      </div>
    </>
  );
};


const mapStateToProps = state => ({
  nav: state.nav.pages
});

export default connect(mapStateToProps, null)(MeetupDetail);
