import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#8dba13',
    },
    secondary: {
      main: '#e5efe9'
    },
    background: {
      default: '#00853f',
      paper: '#003c1c'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      'VAGROUNDEDSTD',
      '"Open Sans"',
      'sans-serif'
    ].join(','),
  }
});

export default theme;
