import React, { Fragment } from 'react';
import HomePageNavBar from '../components/HomePageNavBar';
import ShowCase from '../components/ShowCase';
import appUtil from '../utils';

const { addClasses } = appUtil;

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
  </Fragment>
);

export default HomePage;
