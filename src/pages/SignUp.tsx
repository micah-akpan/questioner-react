import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/auth';
import { setActivePage } from '../actions/nav';
import { gql, useMutation } from '@apollo/client'
import { AUTH_TOKEN } from '../constants';

const SignUpPage = props => {

  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [signUpError, setSignUpError] = useState('');
  const [passwordIsVisible, setPasswordVisibility] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const { firstname, lastname, email, password } = userData;
  const [requesting, setRequesting] = useState(false)

  const history = useHistory()

  const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $firstname: String!,
    $lastname: String!
  ) {
    signup(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      token
      user {
        id
      }
    }
  }
`

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      ...userData
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token)
      setRequesting(false)
      setSignUpError('')
      history.push('/meetups')
    },

    onError: (error) => {
      setRequesting(false)
      setSignUpError(error.message)
    }
  })

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (confirmPassword !== password) {
      return;
    }
    // props.signUpUser(userData);
    setRequesting(true)
    signup()
  };

  useEffect(() => {
    props.setActivePage('login')
  }, [props.user.data]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSignUpError('');
    }, 5000);
    return () => clearInterval(timerId);
  }, []);

  const handleTextChange = evt => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleConfirmPwdChange = evt => {
    setConfirmPassword(evt.target.value);
  };

  return (
    <section className="q-form">
      <div className="container">
        <h3 className="get-started-text">Get started with a free account</h3>
        <form onSubmit={handleFormSubmit}>
          {
            signUpError
            && (
              <div className="auth-process__feedback">
                {signUpError}
              </div>
            )
          }
          <div className='q-form__group'>
            <div className="q-form__input-name">
              <label htmlFor="f-name" className="q-form__label">
                First Name
                  <abbr title="required">*</abbr>
              </label>
              <input
                name="firstname"
                type="text"
                placeholder="Dennis"
                id="f-name"
                className='q-form__input'
                onChange={handleTextChange}
                value={firstname}
                required
              />
            </div>
            <div className="q-form__input-name">
              <label htmlFor="l-name" className="q-form__label">
                Last Name
                  <abbr title="required">*</abbr>
              </label>
              <input
                name="lastname"
                type="text"
                placeholder="Ritchie"
                id="l-name"
                className='q-form__input'
                onChange={handleTextChange}
                value={lastname}
                required
              />
            </div>
          </div>

          <div className='q-form__group'>
            <label htmlFor="userEmail" className="q-form__label">
              Email
                <abbr title="required">*</abbr>
            </label>
            <input
              name="email"
              type="text"
              placeholder="dennisritchie@email.com"
              id="userEmail"
              className='q-form__input'
              onChange={handleTextChange}
              value={email}
              required
            />
          </div>

          <div className='q-form__group password-input'>
            <label htmlFor="pwd" className="q-form__label">
              Password
                <abbr title="required">*</abbr>
            </label>
            <input
              name="password"
              type={passwordIsVisible ? 'text' : 'password'}
              placeholder="**************"
              id="pwd"
              className='q-form__input'
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
                  setPasswordVisibility(!passwordIsVisible);
                }, [passwordIsVisible])
              }
            >
              <img
                src={passwordIsVisible ? 'src/resources/icons/hide.svg' : 'src/resources/icons/view.svg'}
                alt={`Click to ${passwordIsVisible ? 'hide password' : 'show password'}`}
                className="toggle-password__image"
              />
            </button>
            <span>Your password must be at least 8 characters</span>
          </div>

          <div className='q-form__group password-input'>
            <label htmlFor="c-pwd" className="q-form__label">
              Confirm Password
                <abbr title="required">*</abbr>
            </label>
            <input
              name="password"
              type={passwordIsVisible ? 'text' : 'password'}
              placeholder="**************"
              id="c-pwd"
              className='q-form__input'
              onChange={handleConfirmPwdChange}
              required
            />
            <span className="pwd-validation-error-msg" />
            <span className="password-match__feedback">
              {
                confirmPassword === userData.password
                  ? '' : 'Passwords do not match'
              }
            </span>
          </div>

          <button
            className={`q-form__button q-large__button ${requesting ? 'default_pointer' : ''}`}
            disabled={requesting}
          >
            Sign Up
              <span className={`${requesting ? 'loader' : ''}`} />
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
                <span>Sign Up with Google</span>
              </a>
            </li>

            <li>
              <a href="#!" className="facebook">
                <img src="src/resources/icons/facebook-white.svg" alt="A blue horizontal box with a Facebook icon and text" />
                <span>Sign Up with Facebook</span>
              </a>
            </li>
          </ul>
        </div>

        <p className="sign-in__link">
          Already a member?{' '}
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth
});

const mapDispatchToProps = (dispatch) => ({
  setActivePage: () => dispatch(setActivePage('signup', true)),
  signUpUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
