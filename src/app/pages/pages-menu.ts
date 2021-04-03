import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [  
  {
    title: 'Startside',
    icon: 'home-outline',
    link: '/pages/homepage',
  },
  {
    title: 'Beskeder',
    icon: 'email-outline',
    link: '/pages/messages',
  },
  {
    title: 'Indstillinger',
    icon: 'settings',
    link: '/pages/settings',
  },  
  {
    title: 'TRAINER',
    group: true,
  },
  {
    title: 'Træningsprogram',
    icon: 'grid-outline',
    link: '/pages/trainingprogram',
  },
  {
    title: 'Kostplan',
    icon: 'edit-2-outline',
    link: '/pages/dietplan',
  },
  {
    title: 'Klient',
    icon: 'layout-outline',
    link: '/pages/customer',
  },
  {
    title: 'Kalendar',
    icon: 'calendar-outline',
    link: '/pages/calendar',
  },
  {
    title: 'Dokumenter',
    icon: 'browser-outline',
    link: '/pages/documents',
  },
  {
    title: 'Ydelser og pakker',
    icon: 'shuffle-2-outline',
    link: '/pages/servicepackages',
  },
  {
    title: 'Videoer',
    icon: 'video-outline',
    link: '/pages/videos',
  },
  {
    title: 'Marked',
    icon: 'pie-chart-outline',
    link: '/pages/marked',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
