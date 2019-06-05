import React, { Fragment, useState, useCallback } from 'react';
import appUtil from '../utils';
import {
  GetStartedSection,
  InfoCardSection,
  UpcomingMeetups,
  ShowCase,
  HomePageNavBar
} from '../components';
import { MobileNavTriggerIcon, MobileNavMenu } from '../components/shared';

const { addClasses, cards1, cards2 } = appUtil;

const links = [
  {
    id: '1',
    title: 'login',
    url: '/login',
    className: ''
  },
  {
    id: '2',
    title: 'sign up',
    url: '/signup',
    className: ''
  },
  {
    id: '3',
    title: 'Discover meetups',
    url: '/meetups',
    className: ''
  },
];

/**
 * @param {HTMLEvent} event
 * @param {object} opts
 * @returns {void}
 * @description Toggles mobile nav visibility
 * with the 'Esc' key
 */
const toggleMobileNavVisibility = (event, { navIsVisible, setVisibility }) => {
  const escapeKeyCode = 27;
  if ((event.key === 'Escape' || event.keyCode === escapeKeyCode) && navIsVisible) {
    setVisibility(false);
  }
};

const HomePage = () => {
  const [mobileNavIsVisible, setMobileNavVisibility] = useState(false);

  return (
    <Fragment>
      <header className="app-main-header">
        <div className="container">
          <HomePageNavBar
            classes={addClasses(['q-flex', 'header-content'])}
          />
        </div>
        {/* Mobile Nav trigger button */}
        <MobileNavTriggerIcon
          classList={
            addClasses([
              'mobile-nav-sidebar__wrapper',
              mobileNavIsVisible && 'change'
            ])
          }
          handleClick={
            useCallback(() => {
              setMobileNavVisibility(!mobileNavIsVisible);
            })
          }
          handleKeyPress={e => {
            toggleMobileNavVisibility(e, {
              navIsVisible: mobileNavIsVisible,
              setVisibility: setMobileNavVisibility
            });
          }}
        />
        {/* Mobile Nav Menu */}
        <MobileNavMenu
          links={links}
          classList={addClasses(['mobile-nav-menu__wrapper', mobileNavIsVisible && 'nav-menu-show'])}
        />
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
    </Fragment>
  );
};

export default HomePage;
