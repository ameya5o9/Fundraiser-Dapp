import { logo, createCampaign, dashboard, logout, payment, profile, withdraw, sun } from '../assets';

export const navlinks = [
    {
        name: 'logo',
        imgURL: logo,
        link: '/',
    },
    {
        name: 'dashboard',
        imgURL: dashboard,
        link: '/',
    },
    {
        name: 'createCampaign',
        imgURL: createCampaign,
        link: '/createCampaign',
    },
    {
        name: 'payment',
        imgURL: payment,
        link: '/',
        disabled: true,

    },
    {
        name: 'withdraw',
        imgURL: withdraw,
        link: '/',
        disabled: true,

    },
    {
        name: 'profile',
        imgURL: profile,
        link: '/profile',
    },
    {
        name: 'logout',
        imgURL: logout,
        link: '/',
        disabled: true,
      },
      {
        name: 'sun',
        imgURL: sun,
        link: '/',
        disabled: true,
      },
]