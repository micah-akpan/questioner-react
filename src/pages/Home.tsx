import { useEffect } from 'react';
import { connect } from 'react-redux';
import appUtil from '../utils';
import {
  UpcomingMeetups,
  ShowCase,
  InfoCards,
} from '../components';
import { setActivePage } from '../actions/nav';
import { Link } from 'react-router-dom';

const { cards1, cards2 } = appUtil;

const HomePage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(setActivePage('root'));
  }, []);

  return (
    <>
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
    </>
  );
};

export default connect(null, null)(HomePage);
