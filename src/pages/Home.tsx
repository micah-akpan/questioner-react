import { lazy, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import appUtil from '../utils';
import { setActivePage } from '../actions/nav';
import { Link } from 'react-router-dom';
import HomePageLoader from './HomePageLoader'

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
