import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import appUtil from '../utils';
import {
  GetStartedSection,
  InfoCardSection,
  UpcomingMeetups,
  ShowCase,
} from '../components';
import { setActivePage } from '../actions/nav';

const { cards1, cards2 } = appUtil;

const HomePage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(setActivePage('root'));
  }, []);

  return (
    <>
      <ShowCase />
      <UpcomingMeetups />
      <InfoCardSection
        headingText="What you can do with Questioner"
        cards={cards1}
        classList={['questioner-what']}
      />
      <InfoCardSection
        headingText="How Questioner works?"
        cards={cards2}
        classList={['questioner-what']}
      />
      <GetStartedSection />
    </>
  );
};

export default connect(null, null)(HomePage);
