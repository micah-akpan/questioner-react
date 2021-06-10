import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions/meetups';
import { setActivePage } from '../actions/nav';
import SearchNav from '../components/SearchNav';
import Meetup from '../components/shared/Meetup';

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
            meetups == null ?
              <div className="cards shimmer-cards">
                {
                  Array(6).fill(0).map((_, i) => {
                    return (
                      <div className="shimmer-card" key={i.toString()}>
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
