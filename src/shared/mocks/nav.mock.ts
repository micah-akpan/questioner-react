export const pageToNavItems = {
    login: [
        {
            icon: '',
            url: '/signup',
            title: 'signup',
            isIcon: false
        },
    ],
    signup: [
        {
            icon: '',
            url: '/login',
            title: 'login',
            isIcon: false
        },
    ],
    meetupList: [
        {
            icon: '',
            url: '/notification',
            title: 'notification',
            isIcon: true,
            iconSrc: 'src/resources/icons/notifications-button.svg',
            iconDesc: 'A gold-colored bell icon'
        },

        {
            icon: '',
            url: '/profile',
            title: 'profile',
            isIcon: true,
            iconSrc: 'src/resources/icons/avatar1.svg',
            iconDesc: 'An outline of a person\'s face'
        },

        {
            icon: '',
            url: '/logout',
            title: 'Sign Out',
            isIcon: true,
            iconSrc: 'src/resources/icons/avatar1.svg',
            iconDesc: 'An outline of a person\'s face'
        },
        
    ],
    meetupDetail: [
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
        },
        {
            icon: '',
            url: '/logout',
            title: 'Sign Out',
            isIcon: true,
            iconSrc: 'src/resources/icons/avatar1.svg',
            iconDesc: 'An outline of a person\'s face'
        },
    ],
    root: [
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
};
