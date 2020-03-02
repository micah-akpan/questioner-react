import React from 'react';
import appUtil from '../utils';
import {
  GetStartedSection,
  InfoCardSection,
  UpcomingMeetups,
  ShowCase,
} from '../components';

const { cards1, cards2 } = appUtil;

const HomePage = () => {
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

export default HomePage;
