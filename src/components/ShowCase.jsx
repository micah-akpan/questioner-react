import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCase = () => (
  <section className="q-showcase">
    <div className="container">
      <div className="q-showcase__content">
        <h2 className="fg-white q-showcase__text">Crowdsource the most relevant meetup questions using Questioner</h2>
        <Link className="fg-white q-btn text__large q-showcase__link" to="/signup" role="button">Get Started for free</Link>
      </div>
    </div>
  </section>
);

export default ShowCase;
