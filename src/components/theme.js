import { createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    // fontSize: 14,
    // fontWeightLight: 300, // Work Sans
    // fontWeightRegular: 400, // Work Sans
    // fontWeightMedium: 700, // Roboto Condensed
    //fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});


export default theme;