import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { defaultTheme } from './defaultTheme';

export const openSansTheme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
});

export const montserratTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export const playfairTheme = createTheme({
  typography: {
    fontFamily: ['Playfair Display', 'serif'].join(','),
  },
});

let websiteTheme = createTheme({
  palette: {
    primary: {
      main: '#79AAB0',
    },
    secondary: {
      main: '#BB9384',
    },
    whites: defaultTheme.palette.augmentColor({
      color: {
        main: '#FFF',
        name: 'white',
      },
    }),
    gray: defaultTheme.palette.augmentColor({
      color: {
        main: '#b4b2c5',
        name: 'gray',
      },
    }),
  },
  typography: {
    fontFamily: ['Titillium Web', 'sans-serif'].join(','),
  },
});

websiteTheme = responsiveFontSizes(websiteTheme);

export { websiteTheme };
