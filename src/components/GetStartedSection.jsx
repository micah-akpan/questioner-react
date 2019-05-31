import React from 'react';
import { Link } from 'react-router-dom';

const GetStartedSection = () => (
  <section className="get-started">
    <div className="container">
      <h3 className="get-started__msg">It&apos;s easy to get started</h3>
      <Link to="/signup" className="q-btn get-started__btn">Get started now for free</Link>
    </div>
  </section>
);

export default GetStartedSection;
