import React, { Fragment } from 'react';
import HomePageNavBar from '../components/HomePageNavBar';
import ShowCase from '../components/ShowCase';
import appUtil from '../utils';
import UpcomingMeetups from '../components/UpcomingMeetups';
import InfoCardSection from '../components/InfoCardSection';
import GetStartedSection from '../components/GetStartedSection';
import Footer from '../components/shared/Footer';

const { addClasses, cards1, cards2 } = appUtil;

const HomePage = () => (
  <Fragment>
    <header className="app-main-header">
      <div className="container">
        <HomePageNavBar
          classes={addClasses(['q-flex', 'header-content'])}
        />
      </div>
    </header>
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
    <Footer />
  </Fragment>
);

export default HomePage;
