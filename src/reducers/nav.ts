import { GET_MEETUP_PAGE_NAV_ITEMS, GET_LOGIN_PAGE_ITEMS, GET_SIGNUP_PAGE_ITEMS, GET_ALL_ROOT_PAGE_NAV_ITEMS } from '../actionTypes/nav'
import { NavItem } from '../shared/models/nav.model'

const initialState = {
    pages: {
        '': {
            links: [],
            hasLeftNav: true,
        },
        meetupList: {
            links: [],
            hasLeftNav: false,
        },
        login: {
            links: [],
            hasLeftNav: false,
        },
        signup: {
            links: [],
            hasLeftNav: false,
        },
        activePage: '',
    }
}

export default (state = initialState, { type }) => {
    switch (type) {
        case GET_MEETUP_PAGE_NAV_ITEMS:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    meetupList: {
                        ...state.pages.meetupList,
                        links: [
                            {
                                icon: '',
                                url: '',
                                title: 'notification',
                                isIcon: true,
                                iconSrc: 'src/resources/icons/notifications-button.svg',
                                iconDesc: 'A gold-colored bell icon'
                            },

                            {
                                icon: '',
                                url: '',
                                title: 'profile',
                                isIcon: true,
                                iconSrc: 'src/resources/icons/avatar1.svg',
                                iconDesc: 'An outline of a person\'s face'
                            }
                        ]
                    },
                    activePage: 'meetupList',
                    authPage: false,
                }
            }

        case GET_LOGIN_PAGE_ITEMS:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    login: {
                        ...state.pages.login,
                        links: [
                            {
                                icon: '',
                                url: '',
                                title: 'signup',
                                isIcon: false
                            },
                        ]
                    },
                    activePage: 'login',
                    authPage: true,
                }
            }

        case GET_SIGNUP_PAGE_ITEMS:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    signup: {
                        ...state.pages.signup,
                        links: [
                            {
                                icon: '',
                                url: '',
                                title: 'login',
                                isIcon: false
                            },
                        ]
                    },
                    activePage: 'signup',
                    authPage: true,
                }
            }

        case GET_ALL_ROOT_PAGE_NAV_ITEMS:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    '': {
                        ...state.pages[''],
                        links: [
                            {
                                icon: '',
                                url: '/login',
                                title: 'Login',
                                isIcon: false,
                                className: 'sign-in',
                            },

                            {
                                icon: '',
                                url: '/signup',
                                title: 'Sign Up',
                                isIcon: false,
                                className: 'sign-up',
                            },
                        ]
                    },
                    activePage: '',
                    authPage: false,
                }
            }

        default:
            return state
    }
}
