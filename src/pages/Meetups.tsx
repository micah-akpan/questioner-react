import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMeetups } from '../actions/meetups';
import { setActivePage } from '../actions/nav';
import SearchNav from '../components/SearchNav';
import Meetup from '../components/shared/Meetup';
import ContentLoader from 'react-content-loader'
import { gql, useQuery } from '@apollo/client'
import { LINKS_PER_PAGE } from '../constants';
import { useHistory } from 'react-router-dom'

const MeetupsPage = ({ meetups, getMeetups, setActivePage }) => {
  const history = useHistory()
  
  const MEETUP_QUERY = gql`
    query MeetupQuery(
      $take: Int
      $orderBy: String
    ) {
      meetups(take: $take, orderBy: $orderBy) {
        id
        topic
        happeningOn
      }
    }
  `

  const getQueryVariables = (page: number) => {
    const take = page > 0 ? page * LINKS_PER_PAGE : 0
    const orderBy = 'happeningOn'
    return { take, orderBy }
  }

  let page: number = parseInt(history.location.search.match(/\d/g))

  const { data, loading, error } = useQuery(MEETUP_QUERY, {
    variables: getQueryVariables(page)
  })

  useEffect(() => {
    setActivePage()
    // getMeetups();
  }, []);

  return (
    <>
      <SearchNav />

      <section className="q-cards" id="q-cards">
        <div className="container">
          {/* Data loader placeholder */}
          {
            loading ?
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
              <>
                <div className="cards">
                  {data.meetups.map(meetup => (
                    <Meetup meetup={meetup} key={meetup.id} />
                  ))}
                </div>

                {data.meetups.length > 0 &&
                  <button className="q-btn btn__centered"
                   onClick={() => {
                      history.push(`/meetups?next=${page + 1}`)
                   }}>See more meetups</button>}
              </>
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
