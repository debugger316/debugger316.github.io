import PersonIcon from '@mui/icons-material/Person';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const navButtonProps = [
  {
    color: 'primary',
    to: '/about',
    icon: <PersonIcon />,
    text: 'About',
  },
  {
    color: 'primary',
    to: '/portfolio',
    icon: <DeveloperBoardIcon />,
    text: 'Portfolio',
  },
  {
    color: 'primary',
    to: '/kitchen',
    icon: <RestaurantIcon />,
    text: 'Kitchen',
  },
];
