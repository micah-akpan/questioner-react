import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../actions/nav';
import { gql, useApolloClient } from '@apollo/client'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Container from '../components/shared/Container'
import SocialIcon from '../components/shared/SocialIcon'

const Header = styled.h3`
  text-align: left;
  font-size: 2rem;
  text-transform: capitalize;
`

const MeetupHost = styled.p`
  position: relative;
  top: -30px;
  left: 0;
  text-transform: capitalize;
`

const MeetupPreviewBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const MeetupPreviewImageContainer = styled.div`
  flex: 1 1 50%;
`

const MeetupPreviewImage = styled.img`
  
`

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
      <section>
        <Container>
          <div className="details-content">
            <div className="meetup-title__wrapper">
              <Header>{meetup.topic}</Header>
              <MeetupHost>{meetup.location}</MeetupHost>
            </div>
            <span className="meetup-date__primary"></span>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <MeetupPreviewBlock>
            <MeetupPreviewImageContainer>
              <MeetupPreviewImage />

              <section className="meetup-invite-share">
                <div className="meetup-rsvp__enquiry">
                </div>

                <p>Let your friends know about this meetup</p>
                <div className="share-media-links">
                  <SocialIcon src="" alt="Share with friends on Facebook" />
                  <SocialIcon src="" alt="Share with friends on Twitter" />
                  <SocialIcon src="" alt="Share with friends on Instagram" />
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
            </MeetupPreviewImageContainer>

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
          </MeetupPreviewBlock>
        </Container>
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
