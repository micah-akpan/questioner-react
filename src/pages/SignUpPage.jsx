import React, { Fragment } from 'react';
import RightNav from '../components/shared/RightNav';
import NavBar from '../components/NavBar';
import appUtil from '../utils';

const SignUpPage = () => (
  <Fragment>
    <header className="app-main-header">
      <div className="container">
        <NavBar classes={appUtil.addClasses(['q-flex', 'header-content'])}>
          <RightNav>
            <ul>
              <span>Are you a member?</span>
              <li><a href="./sign-in.html">Login</a></li>
            </ul>
          </RightNav>
        </NavBar>
      </div>
    </header>
    <section className="q-form" id="q-form">
      <div className="container">
        <h3 className="get-started-text">Get started with a free account</h3>
      </div>
    </section>
  </Fragment>
);

export default SignUpPage;
