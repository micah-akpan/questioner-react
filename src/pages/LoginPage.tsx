/* eslint-disable */
import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { signInUser } from '../actions/auth';
import Validator from 'validatorjs';

const { addClasses } = appUtil;

const rules = {
  email: 'required|email',
  password: 'required|min:8'
};

const LoginPage = (props) => {
  const [passwordIsVisible, setPasswordVisibility] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [validationErrors, setValidationErrors] = useState({ email: null, password: null });

  const handleTextChange = evt => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
    const validation = new Validator(userData, rules);
    setValidationErrors({
      ...validationErrors,
      [name]: validation.errors.first(name)
    });
  }
  useEffect(() => {
    if (props.user.data) {
      localStorage.setItem('authToken', props.user.data.token)
    }
  }, [props.user.data])

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const validation = new Validator(userData, rules);
    if (validation.passes()) {
      props.signInUser(userData);
    } else {
      const emailValidationError = validation.errors.first('email');
      const passwordValidationError = validation.errors.first('password');
      setValidationErrors({
        email: emailValidationError,
        password: passwordValidationError
      });
    }
  };

  const { email, password } = userData;
  return (
    <Fragment>
      <header className="app-main-header">
        <div className="container">
          <NavBar classes={appUtil.addClasses(['q-flex', 'header-content', 'header__no-border'])}>
            <RightNav>
              <ul className="auth-pages-nav_link">
                <span>Not Registered yet?
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </span>
              </ul>
            </RightNav>
          </NavBar>
        </div>
      </header>
      <section className="q-form">
        <div className="container">
          <h3>Log In To Questioner</h3>
          <p className="welcome-back-msg">Welcome back</p>

          <Form handleFormSubmit={handleFormSubmit}>
            <FormGroup classList={addClasses(['q-form__group'])}>
              <FormLabel idText="userEmail" className="q-form__label" labelText="Email">
                <abbr title="required">*</abbr>
              </FormLabel>
              <FormInputField
                name="email"
                type="text" // email type is overridden here to provide a better validation error
                placeholder="dennisritchie@email.com"
                id="userEmail"
                classes={addClasses(['q-form__input'])}
                onChange={handleTextChange}
                value={email}
                required
              />
              <span className="input-validation-feedback email-validation">
                {validationErrors.email}
              </span>
            </FormGroup>
            <FormGroup classList={addClasses(['q-form__group', 'password-input'])}>
              <FormLabel idText="userPwd" className="q-form__label" labelText="Password">
                <abbr title="required">*</abbr>
              </FormLabel>
              <FormInputField
                name="password"
                type={passwordIsVisible ? 'text' : 'password'}
                placeholder="**************"
                id="userPwd"
                classes={addClasses(['q-form__input'])}
                pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                autoComplete="off"
                onChange={handleTextChange}
                value={password}
                required
              />
              <button
                className="toggle-password-visibility"
                type="button"
                data-testid="toggle-password__btn"
                onClick={
                  useCallback(() => {
                    setPasswordVisibility
                      (!passwordIsVisible);
                  }, [passwordIsVisible])
                }
              >
                <img src={passwordIsVisible ? "src/resources/icons/hide.svg" : "src/resources/icons/view.svg"} className="toggle-password__image" />
              </button>
              <span
                className="input-validation-feedback"
              >
                {validationErrors.password}
              </span>
              <span id="forgot-pwd">
                <a href="./reset-password.html">
                  Forgot password?
                </a>
              </span>
            </FormGroup>
            <FormButton
              classList={addClasses([
                'q-form__button', 'q-large__button',
                props.user.requesting && 'default_pointer'
              ])}
              disabled={props.user.requesting}>
              Login
                <span className={`${props.user.requesting ? 'loader' : ''}`}></span>
            </FormButton>
          </Form>
          <div className="social-media__links--option-rule">
            <span className="social-media__links--signup-option">OR</span>
          </div>

          <div className="social-media__links">
            <ul>
              <li>
                <a href="#!" className="google">
                  <img src="src/resources/icons/google.svg" alt="A red horizontal box with a Google icon and text" />
                  <span>Sign In with Google</span>
                </a>
              </li>

              <li>
                <a href="#!" className="facebook">
                  <img src="src/resources/icons/facebook-white.svg" alt="A blue horizontal box with a Facebook icon and text" />
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
    </Fragment>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    user: auth
  }
};

export default connect(mapStateToProps, { signInUser })(LoginPage);
