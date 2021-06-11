import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions/meetups';
import { setActivePage } from '../actions/nav';
import SearchNav from '../components/SearchNav';
import Meetup from '../components/shared/Meetup';
import ContentLoader from 'react-content-loader'

const MeetupsPage = ({ meetups, getMeetups, setActivePage }) => {
  useEffect(() => {
    setActivePage()
    getMeetups();
  }, []);

  return (
    <>
      <SearchNav />

      <section className="q-cards" id="q-cards">
        <div className="container">
          {/* Data loader placeholder */}
          {
            meetups.length == 0 || meetups == null ?
              <div className="cards shimmer-cards">
                {
                  Array(6).fill(0).map((_, i) => {
                    return (
                      <div className="shimmer-card" key={i.toString()}>
                        <ContentLoader viewBox="0 0 380 200" speed={2}>
                          <rect x="0" y="0" rx="5" ry="5" width="360" height="150" />
                          <rect x="0" y="155" rx="4" ry="4" width="360" height="25" />
                          <rect x="0" y="185" rx="3" ry="3" width="300" height="15" />
                        </ContentLoader>
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
    </>
  );
};

const mapStateToProps = ({ meetups, questions }) => ({
  meetups: meetups.data,
  questions: questions.data
});

const mapDispatchToProps = (dispatch) => ({
  setActivePage: () => dispatch(setActivePage('meetupList')),
  getMeetups,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsPage);
