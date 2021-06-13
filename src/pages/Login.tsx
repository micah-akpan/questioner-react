/* eslint-disable */
import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../actions/auth';
import Validator from 'validatorjs';
import { setActivePage } from '../actions/nav';
import { gql, useMutation } from '@apollo/client'
import { AUTH_TOKEN } from '../constants';

const rules = {
  email: 'required|email',
  password: 'required'
};

const LoginPage = (props) => {
  const [passwordIsVisible, setPasswordVisibility] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [validationErrors, setValidationErrors] = useState({ email: null, password: null });
  const [loginError, setLoginError] = useState('')
  const [requesting, setRequesting] = useState(false)

  const history = useHistory()

  const LOGIN_MUTATION = gql`
    mutation LoginMutation(
      $email: String!,
      $password: String!
    ) {
      login(email: $email, password: $password) {
        token
      }
    }
  `

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: userData.email,
      password: userData.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token)
      setLoginError('')
      setRequesting(false)
      history.push('/meetups?next=1')
    },
    onError: (error) => {
      setRequesting(false)
      setLoginError(error.message)
    }
  })

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
    const token = localStorage.getItem(AUTH_TOKEN)
    if (token) {
      history.push('/meetups')
    }
  })

  useEffect(() => {
    props.setActivePage();
  }, [props.user.data])

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const validation = new Validator(userData, rules);
    if (validation.passes()) {
      setRequesting(true)
      login()
      // props.signInUser(userData);
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
    <section className="q-form">
      <div className="container">
        <h3>Log In To Questioner</h3>
        <p className="welcome-back-msg">Welcome back</p>

        <p className="input-validation-feedback" style={{color: '#ff2222'}}>{loginError}</p>
        <form onSubmit={handleFormSubmit}>
          <div className='q-form__group'>
            <label htmlFor="userEmail" className="q-form__label">Email
              <abbr title="required">*</abbr>
            </label>
            <input
              name="email"
              type="text" // email type is overridden here to provide a better validation error
              placeholder="dennisritchie@email.com"
              id="userEmail"
              className='q-form__input'
              onChange={handleTextChange}
              value={email}
              required
            />
            <span className="input-validation-feedback email-validation">
              {validationErrors.email}
            </span>
          </div>

          <div className='q-form__group password-input'>
            <label htmlFor="userPwd" className="q-form__label">
              Password
              <abbr title="required">*</abbr>
            </label>
            <input
              name="password"
              type={passwordIsVisible ? 'text' : 'password'}
              placeholder="**************"
              id="userPwd"
              className='q-form__input'
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
          </div>

          <button
            type="submit"
            className={`q-form__button q-large__button ${requesting ? 'default_pointer' : ''}`}
            disabled={requesting}>
            Login
            <span className={`${requesting ? 'loader' : ''}`}></span>
          </button>
        </form>
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
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth
})

const mapDispatchToProps = (dispatch) => ({
  setActivePage: () => dispatch(setActivePage('login', true)),
  signInUser: (userData) => dispatch(signInUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
