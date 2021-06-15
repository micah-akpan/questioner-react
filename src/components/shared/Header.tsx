import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MobileNavMenu from './MobileNavMenu';

const Header = ({ navState }) => {
    const [mobileNavIsVisible, setMobileNavVisibility] = useState(false)

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setMobileNavVisibility(false);
            }
        })

        return () => window.removeEventListener('keydown', () => null)
    }, [])

    return (
        <header className="app-main-header">
            <div className="container">
                {/* Main Navigation bar */}
                <nav className={`q-flex header-content ${navState.hasLeftNav ? '' : 'header__no-border'}`}>
                    <div className="white nav-block">
                        <a href="/" className="nav-block__link main-nav-block__link">
                            <h1 className="q-logo q-logo-border">Questioner</h1>
                        </a>
                    </div>

                    {
                        navState.hasLeftNav &&
                        <div className="left-nav q-left-nav">
                            <ul className="app-main-nav__list">
                                <li className="app-main-nav__list__item q-left-nav__list__item">
                                    <a href="/meetups" className="main-nav-block__link q-left-nav__list__item__link">Discover meetups</a>
                                </li>
                            </ul>
                        </div>
                    }

                    {
                        navState.isAuthPage ?
                            <div className="right-nav q-right-nav app-main-nav">
                                <ul className="auth-pages-nav_link">
                                    <span>{navState.activePage == 'login' ? 'Not Registered Yet?' : 'Are you a member?'}
                                        <li>
                                            <a href={`/${navState.activePage == 'login' ? 'signup' : 'login'}`}>{navState.activePage == 'login' ? 'Sign Up' : 'Login'}</a>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                            :

                            <div className={classNames('right-nav', 'q-right-nav', 'app-main-nav', { 'notify-user__nav': navState.activePage === 'meetupList', 'no-flex': navState.activePage === 'meetupList' })}>
                                <ul>
                                    {navState.links.map((item) => (
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
                <div
                    className={classNames('mobile-nav-sidebar__wrapper', { change: mobileNavIsVisible })}
                    onClick={() => {
                        setMobileNavVisibility(!mobileNavIsVisible)
                    }}
                    role="button"
                    tabIndex={0}
                    data-testid="mobile-nav-trigger-icon"
                >
                    <div className="menu-bar1" />
                    <div className="menu-bar2" />
                    <div className="menu-bar3" />
                </div>

                <MobileNavMenu
                    links={navState.links}
                    mobileNavIsVisible={mobileNavIsVisible}
                />
            </div>
        </header>
    )
}

const mapStateToProps = ({ nav }) => ({
    navState: nav.data,
})

export default connect(mapStateToProps, null)(Header);
