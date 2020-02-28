import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getNavItemRequest } from '../../actions/nav';
import MobileNavTriggerIcon from './MobileNavTriggerIcon';
import MobileNavMenu from './MobileNavMenu';


const pageToUrl = {
    login: 'login',
    signup: 'signup',
    meetups: 'meetupList',
    '': ''
}

const getPageType = (): string => {
    const pageFullUrl = window.location.href
    const url = pageFullUrl.substr(pageFullUrl.lastIndexOf('/') + 1)
    return pageToUrl[url]
}

/**
 * @param {HTMLEvent} event
 * @param {object} opts
 * @returns {void}
 * @description Toggles mobile nav visibility with the 'Esc' key
 */
const toggleMobileNavVisibility = (event, { navIsVisible, setVisibility }) => {
    const escapeKeyCode = 27;
    if ((event.key === 'Escape' || event.keyCode === escapeKeyCode) && navIsVisible) {
        setVisibility(false);
    }
};


const Header = (props) => {
    const [mobileNavIsVisible, setMobileNavVisibility] = useState(false);
    useEffect(() => {
        props.dispatch(getNavItemRequest(getPageType()))
    }, [])

    console.log(props.navState)
    return (
        <header className="app-main-header">
            <div className="container">
                {/* Main Navigation bar */}
                <nav className={`q-flex header-content ${props.navState[props.activePage].hasLeftNav ? '' : 'header__no-border'}`}>
                    <div className="white nav-block">
                        <a href="/" className="nav-block__link main-nav-block__link">
                            <h1 className="q-logo q-logo-border">Questioner</h1>
                        </a>
                    </div>

                    {
                        props.navState[props.activePage].hasLeftNav &&
                        <div className="left-nav q-left-nav">
                            <ul className="app-main-nav__list">
                                <li className="app-main-nav__list__item q-left-nav__list__item">
                                    <a href="/meetups" className="main-nav-block__link q-left-nav__list__item__link">Discover meetups</a>
                                </li>
                            </ul>
                        </div>
                    }

                    {
                        props.navState.authPage ?
                            <div className="right-nav q-right-nav app-main-nav">
                                <ul className="auth-pages-nav_link">
                                    <span>{props.navState.activePage == 'login' ? 'Not Registered Yet?' : 'Are you a member?'}
                                        <li>
                                            <a href={`/${props.navState.activePage == 'login' ? 'signup' : 'login'}`}>{props.navState.activePage == 'login' ? 'Sign Up' : 'Login'}</a>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                            :

                            <div className={`right-nav q-right-nav app-main-nav ${props.navState.activePage == 'meetupList' ? 'notify-user__nav no-flex' : ''}`}>
                                <ul>
                                    {props.navState[props.activePage].links.map(item => (
                                        <li key={item.url}>
                                            {
                                                item.isIcon ?
                                                    <button
                                                        className="q-btn"
                                                        title="Notifications"
                                                        type="button"
                                                    >
                                                        <img src={item.iconSrc} alt={item.iconDesc} />
                                                    </button>
                                                    :

                                                    <a href={item.url} role="button" aria-label={`${item.title} button`} className={item.className}>{item.title}</a>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    }
                </nav>
                {/* Main Navigation bar --- ends */}

                <MobileNavTriggerIcon
                    mobileNavIsVisible={mobileNavIsVisible}
                    handleClick={
                        useCallback(() => {
                            setMobileNavVisibility(!mobileNavIsVisible);
                        }, [])
                    }
                    handleKeyPress={e => {
                        toggleMobileNavVisibility(e, {
                            navIsVisible: mobileNavIsVisible,
                            setVisibility: setMobileNavVisibility
                        });
                    }}
                />


                <MobileNavMenu
                    links={props.navState[props.activePage].links}
                    mobileNavIsVisible={mobileNavIsVisible}
                />
            </div>
        </header>
    )
}

const mapStateToProps = ({ nav }) => ({
    navState: nav.pages,
    activePage: nav.pages.activePage
})

export default connect(mapStateToProps, null)(Header);
