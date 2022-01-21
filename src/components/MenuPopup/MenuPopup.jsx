import { Link as RouterLink } from 'react-router-dom';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  bindTrigger,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';

import { navButtonProps } from '../NavBar/constants';

export const MenuPopup = () => {
  const popupState = usePopupState({ variant: 'popover' });
  return (
    <>
      <IconButton
        {...bindTrigger(popupState)}
        color='primary'
        sx={{
          display: {
            md: 'none',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu {...bindMenu(popupState)}>
        {navButtonProps.map((navProps) => {
          const { color, to, icon, text } = navProps;
          return (
            <MenuItem
              onClick={popupState.close}
              key={text}
              component={RouterLink}
              to={to}
            >
              <IconButton color={color}>{icon}</IconButton>
              <Typography color={color}>{text}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
