import React, {
  Fragment,
  useState,
  useEffect,
  useCallback
} from 'react';
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
import { signUpUser } from '../actions/auth';

const { addClasses } = appUtil;

const SignUpPage = props => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [signUpError, setSignUpError] = useState('');
  const [passwordIsVisible, setPasswordVisibility] = useState(false);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    props.signUpUser(userData);
  };

  useEffect(() => {
    if (props.user.data) {
      localStorage.setItem('authToken', props.user.data.token);
      // sign up was successful
      // no need displaying the error message
      setSignUpError('');
    }
  }, [props.user.data]);

  useEffect(() => {
    if (props.user.error) {
      setSignUpError(props.user.error.error);
    }
  }, [props.user.error]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSignUpError('');
    }, 5000);
    return clearInterval(timerId);
  }, []);

  const { firstname, lastname, email, password } = userData;

  const handleTextChange = evt => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };
  return (
    <Fragment>
      <header className="app-main-header">
        <div className="container">
          <NavBar classes={appUtil.addClasses(['q-flex', 'header-content'])}>
            <RightNav>
              <ul>
                <span>Are you a member?</span>
                <li>
                  <Link to="/">Login</Link>
                </li>
              </ul>
            </RightNav>
          </NavBar>
        </div>
      </header>
      <section className="q-form" id="q-form">
        <div className="container">
          <h3 className="get-started-text">Get started with a free account</h3>
          <Form handleFormSubmit={handleFormSubmit}>
            {
              signUpError
              && (
                <div className="auth-process__feedback">
                  {signUpError}
                </div>
              )
            }
            <FormGroup classList={addClasses(['q-form__group'])}>
              <div className="q-form__input-name">
                <FormLabel idText="f-name" className="q-form__label" labelText="First Name">
                  <abbr title="required">*</abbr>
                </FormLabel>
                <FormInputField
                  name="firstname"
                  type="text"
                  placeholder="Dennis"
                  id="f-name"
                  classes={addClasses(['q-form__input'])}
                  onChange={handleTextChange}
                  value={firstname}
                  required
                />
              </div>
              <div className="q-form__input-name">
                <FormLabel idText="l-name" className="q-form__label" labelText="Last Name">
                  <abbr title="required">*</abbr>
                </FormLabel>
                <FormInputField
                  name="lastname"
                  type="text"
                  placeholder="Ritchie"
                  id="l-name"
                  classes={addClasses(['q-form__input'])}
                  onChange={handleTextChange}
                  value={lastname}
                  required
                />
              </div>
            </FormGroup>
            <FormGroup classList={addClasses(['q-form__group'])}>
              <FormLabel idText="userEmail" className="q-form__label" labelText="Email">
                <abbr title="required">*</abbr>
              </FormLabel>
              <FormInputField
                name="email"
                type="text"
                placeholder="dennisritchie@email.com"
                id="userEmail"
                classes={addClasses(['q-form__input'])}
                onChange={handleTextChange}
                value={email}
                required
              />
            </FormGroup>

            <FormGroup classList={addClasses(['q-form__group', 'password-input'])}>
              <FormLabel idText="pwd" className="q-form__label" labelText="Password">
                <abbr title="required">*</abbr>
              </FormLabel>
              <FormInputField
                name="password"
                type={passwordIsVisible ? 'text' : 'password'}
                placeholder="**************"
                id="pwd"
                classes={addClasses(['q-form__input'])}
                onChange={handleTextChange}
                value={password}
                required
              />
              <button
                className="toggle-password-visibility"
                type="button"
                onClick={
                  useCallback(() => {
                    setPasswordVisibility(!passwordIsVisible);
                  }, [passwordIsVisible])
                }
              >
                show
              </button>
              <span>Your password must be at least 8 characters</span>
            </FormGroup>

            <FormGroup classList={addClasses(['q-form__group', 'password-input'])}>
              <FormLabel idText="c-pwd" className="q-form__label" labelText="Confirm Password">
                <abbr title="required">*</abbr>
              </FormLabel>
              <FormInputField
                name="password"
                type={passwordIsVisible ? 'text' : 'password'}
                placeholder="**************"
                id="c-pwd"
                classes={addClasses(['q-form__input'])}
                required
              />
              <span className="pwd-validation-error-msg" />
            </FormGroup>
            <FormButton
              classList={addClasses(['q-form__button', 'q-large__button', props.user.requesting && 'default_pointer'])}
              disabled={props.user.requesting}
            >
              Sign Up
              <span className={`${props.user.requesting ? 'loader' : ''}`} />
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
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth
});

export default connect(mapStateToProps, { signUpUser })(SignUpPage);
