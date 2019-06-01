import React, { Fragment } from 'react';
import HomePageNavBar from '../components/HomePageNavBar';
import ShowCase from '../components/ShowCase';
import appUtil from '../utils';
import UpcomingMeetups from '../components/UpcomingMeetups';
import InfoCardSection from '../components/InfoCardSection';
import GetStartedSection from '../components/GetStartedSection';
import Footer from '../components/shared/Footer';

const { addClasses } = appUtil;


const cards1 = [
  {
    id: 1,
    cardText: 'Search for a meetup by name, location or hash',
    cardIcon: 'src/resources/icons/loupe.svg'
  },
  {
    id: 2,
    cardText: 'Select a meetup and schedule to attend a meetup',
    cardIcon: 'src/resources/icons/click.svg'
  },
  {
    id: 3,
    cardText: 'View Top Questions and Comments on those questions for a particular meetup',
    cardIcon: 'src/resources/icons/view.svg'
  }
];

const cards2 = [
  {
    id: 4,
    cardText: 'Choose a meetup you plan to attend',
    cardIcon: 'src/resources/icons/click.svg'
  },
  {
    id: 5,
    cardText: 'Do you have a <strong>question</strong> about the meetup?Ask Give your $0.02 to questions asked by meetup attendees like you. Vote on questions',
    cardIcon: 'src/resources/icons/question-black.svg'
  },
  {
    id: 6,
    cardText: 'Meetup Organizers will use the number of votes, and comments on a question to prioritise questions in a meetup',
    cardIcon: 'src/resources/icons/plan.svg'
  }
];

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
