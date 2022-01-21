import { twitter, gigs, scmac, tech4good } from '../../assets';
import { ArtsCenter } from './ArtsCenter';

export const projectsSummary = [
  {
    image: gigs,
    company: 'Tech4Good Lab',
    title: 'Gig Well-being',
    body: 'At the Tech4Good Lab at UCSC...',
    to: 'gig-well-being',
  },
  {
    image: scmac,
    company: 'Santa Cruz Mountain Arts Center',
    title: 'Human-Centered Design Research',
    body: `Problem solving my local arts center's marketing and leadership issues through the integration of technology`,
    to: 'hcd-research',
  },
  {
    image: twitter,
    company: 'Center for Applied Values and Ethics in Advancing Technologies',
    title: 'Twitter Semantic Analysis',
    body: 'At the Center for Applied Values in Emerging Technologies...',
    to: 'twitter-semantic-analysis',
  },
  {
    image: tech4good,
    company: 'Tech4Good Lab',
    title: 'AI-Economist',
    body: 'For this AI-Economist...',
    to: 'ai-economist',
  },
];

export const projectsFull = {
  'gig-well-being': {
    image: gigs,
    company: 'Tech4Good Lab',
    title: 'Gig Well-being',
    type: 'HCI Research',
    body: 'At the Tech4Good Lab at UCSC...',
    toolkit: ['Python', 'Reddit API'],
    methodologies: ['User Research', 'User Interviewing'],
    Component: '',
  },
  'hcd-research': {
    image: scmac,
    company: 'Santa Cruz Mountain Arts Center',
    title: 'Human-Centered Design Research',
    type: 'UX Research',
    description:
      'The overall goal of this project is to help my local art center to succeed in building a diverse and multicultural community during the pandemic time when they are lacking strong leadership and consistent volunteers.',
    toolkit: ['Figma', 'Annota'],
    methodologies: ['User Research', 'Coding', 'Empathizing'],
    Component: ArtsCenter,
  },
  'twitter-semantic-analysis': {
    image: twitter,
    company: 'Center for Applied Values and Ethics in Advancing Technologies',
    title: 'Twitter Semantic Analysis',
    type: 'HCI Research',
    description: '',
    toolkit: ['Python', 'Twitter API'],
    methodologies: ['User Interviewing', 'User Research'],
    Component: '',
  },
  'ai-economist': {
    image: tech4good,
    company: 'Tech4Good Lab',
    title: 'AI-Economist',
    type: 'HCI Research',
    description: '',
    toolkit: ['Machine Learning', 'Python'],
    methodologies: ['Literature Reviews'],
    Component: '',
  },
};
