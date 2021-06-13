import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeetups } from '../actions/meetups';
import { setActivePage } from '../actions/nav';
import SearchNav from '../components/SearchNav';
import Meetup from '../components/shared/Meetup';
import { LINKS_PER_PAGE } from '../constants';

const MeetupsPage = ({ setActivePage, meetupSearchFilter }) => {
  const history = useHistory()
  const [requestedSearch, setRequestedSearch] = useState(false)

  const MEETUP_QUERY = gql`
    query MeetupQuery(
      $take: Int
      $orderBy: String
      $filter: String
    ) {
      meetups(take: $take, orderBy: $orderBy, filter: $filter) {
        id
        topic
        happeningOn
      }
    }
  `

  const getQueryVariables = (page: number, filter = '') => {
    const take = page > 0 ? page * LINKS_PER_PAGE : 0
    const orderBy = 'happeningOn'
    return { take, orderBy, filter }
  }

  let page: number = parseInt(history.location.search.match(/\d/g))

  // get filter term
  let queryParams = history.location.search
  let qParamsIdx = queryParams.indexOf('filter')
  let filterParams = qParamsIdx > -1 ? queryParams.substring(qParamsIdx) : ''
  let filterTerm = filterParams.split('=')[1]

  const { data, loading, error } = useQuery(MEETUP_QUERY, {
    variables: getQueryVariables(page, filterTerm)
  })

  useEffect(() => {
    setActivePage()
  }, []);

  const searchMeetup = (filter: string) => {
    // history.push(`?next=${page}&filter=${meetupSearchFilter
    //   ? meetupSearchFilter : filter}`)
    setRequestedSearch(true)
    history.push(`?next=${page}&filter=${filter}`)
  }

  const fetchMoreMeetups = () => {
    let url = requestedSearch
      ? `/meetups?next=${page + 1}&filter=${meetupSearchFilter}`
      : `/meetups?next=${page + 1}`
    history.push(url)
  }

  return (
    <>
      <SearchNav searchMeetup={searchMeetup} />

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
                    onClick={fetchMoreMeetups}>See more meetups</button>}
              </>
          }
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ meetups, questions }) => ({
  meetups: meetups.data,
  questions: questions.data,
  meetupSearchFilter: meetups.search.filter
});

const mapDispatchToProps = (dispatch) => ({
  setActivePage: () => dispatch(setActivePage('meetupList')),
  getMeetups,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsPage);
