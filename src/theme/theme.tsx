import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#8dba13',
      light: '#8bb417',
      dark: '#006c21', 
      A100: '#67a21c'
    },
    secondary: {
      main: '#e5efe9',
      light: '#ffffff'
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
