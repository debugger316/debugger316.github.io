import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { navButtonProps } from './constants';
import { MenuPopup } from '../MenuPopup/MenuPopup';

const NavButton = (props) => {
  return (
    <IconButton component={RouterLink} to={props.to} color={props.color}>
      {props.icon}
      <Typography fontWeight='bold' variant='h5' color='whites.main'>
        {props.text}
      </Typography>
    </IconButton>
  );
};

const NavButtons = () => {
  return (
    <>
      {navButtonProps.map((navProps) => {
        const { color, to, icon, text } = navProps;
        return (
          <NavButton key={text} color={color} to={to} icon={icon} text={text} />
        );
      })}
    </>
  );
};

export const NavBar = () => {
  return (
    <Container disableGutters={true} maxWidth='xl'>
      <AppBar elevation={0} color='transparent' position='static'>
        <Toolbar>
          <NavButton
            isHome
            color='primary'
            to='/'
            icon={<HomeIcon />}
            text='CZ'
          />
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={3}
            sx={{
              display: {
                xs: 'none',
                md: 'inline-flex',
              },
            }}
          >
            <NavButtons />
          </Stack>
          <MenuPopup />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
