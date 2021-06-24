import { lazy, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import appUtil from '../utils';
import { setActivePage } from '../actions/nav';
import { Link } from 'react-router-dom';
// // import Test from './Test'
// import React from 'react'

import ContentLoader from 'react-content-loader'

const HomePageLoader = props => (
  <ContentLoader viewBox="0 0 500 300" height={300} width={500} {...props}>
    <rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
    <circle cx="492" cy="16" r="8" />
    <circle cx="472" cy="16" r="8" />
    <rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

    <rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="254" y="39" rx="0" ry="0" width="34" height="8" />

    <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

    <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

    <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
  </ContentLoader>
)


const { cards1, cards2 } = appUtil;

const ShowCase = lazy(() => import('../components/ShowCase'))
const UpcomingMeetups = lazy(() => import('../components/UpcomingMeetups'))
const InfoCards = lazy(() => import('../components/InfoCards'))

const HomePage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(setActivePage('root'));
  }, []);

  return (
    <Suspense fallback={<HomePageLoader />}>
      <ShowCase />
      <UpcomingMeetups />

      <section className='questioner-what'>
        <div className="container">
          <h3 className="heading-sec__primary">What you can do with Questioner</h3>
          <InfoCards cards={cards1} />
        </div>
      </section>

      <section className="questioner-what">
        <div className="container">
          <h3 className="heading-sec__primary">How Questioner works?</h3>
          <InfoCards cards={cards2} />
        </div>
      </section>

      <section className="get-started">
        <div className="container">
          <h3 className="get-started__msg">It&apos;s easy to get started</h3>
          <Link to="/signup" className="q-btn btn-get-started" role="button">Get started now</Link>
        </div>
      </section>
    </Suspense>
  );
};

export default connect(null, null)(HomePage);
