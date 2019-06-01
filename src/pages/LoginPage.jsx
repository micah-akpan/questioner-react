import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RightNav from '../components/shared/RightNav';
import NavBar from '../components/NavBar';
import appUtil from '../utils';
import {
  Form,
  FormGroup,
  FormLabel,
  FormInputField,
  FormButton
} from '../components/shared';
import Footer from '../components/shared/Footer';

const { addClasses } = appUtil;

const LoginPage = () => (
  <Fragment>
    <header className="app-main-header">
      <div className="container">
        <NavBar classes={appUtil.addClasses(['q-flex', 'header-content'])}>
          <RightNav>
            <ul>
              <span>Not Registered yet?
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
              </span>
            </ul>
          </RightNav>
        </NavBar>
      </div>
    </header>
    <section className="q-form" id="q-form">
      <div className="container">
        <h3>Log In To Questioner</h3>
        <p className="welcome-back-msg">Welcome back</p>

        <Form>
          <FormGroup classList={addClasses(['q-form__group'])}>
            <FormLabel idText="userEmail" className="q-form__label" labelText="Email" />
            <FormInputField
              name="email"
              type="text"
              placeholder="dennisritchie@email.com"
              id="userEmail"
              classes={addClasses(['q-form__input'])}
              required
            />
            <span className="input-validation-feedback">Must be a valid email address</span>
          </FormGroup>
          <FormGroup classList={addClasses(['q-form__group', 'password-input'])}>
            <FormLabel idText="userPwd" className="q-form__label" labelText="Password">
              <abbr title="required">*</abbr>
            </FormLabel>
            <FormInputField
              name="password"
              type="password"
              placeholder="**************"
              id="userPwd"
              classes={addClasses(['q-form__input'])}
              pattern="(?=.*\d)(?=.*[a-z]).{8,}"
              autocomplete="off"
              required
            />
            <button className="toggle-password-visibility" type="button">
                show
            </button>
            <span
              className="input-validation-feedback"
            >
              Your Password must be at least 8 characters,
              as well as contain one uppercase, one lowercase and one number
            </span>
            <span id="forgot-pwd">
              <a href="./reset-password.html">
                  Forgot password?
              </a>
            </span>
          </FormGroup>
          <FormButton
            text="Login"
            classList={addClasses(['q-form__button', 'q-large__button'])}
          />
        </Form>
        <div className="social-media__links--option-rule">
          <span className="social-media__links--signup-option">OR</span>
        </div>

        <div className="social-media__links">
          <ul>
            <li>
              <a href="#!" className="google">
                <img src="src/resources/assets/icons/google.svg" alt="A red horizontal box with a Google icon and text" />
                <span>Sign In with Google</span>
              </a>
            </li>

            <li>
              <a href="#!" className="facebook">
                <img src="src/resources/assets/icons/facebook-white.svg" alt="A blue horizontal box with a Facebook icon and text" />
                <span>Sign In with Facebook</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="sign-up__link">
            Not Registered Yet?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
    <Footer />
  </Fragment>
);

export default LoginPage;
