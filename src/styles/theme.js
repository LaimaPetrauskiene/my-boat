import { createTheme } from '@mui/material';

const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    background: {
      default: '#f6f6f6',
    },
    primary: {
      main: '#00114b',
      
      light: '#062c69',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#fa9570',
      light: '#ffd2d2',
      
      contrastText: '#fafafa',
    },
  },
  mixins: {
    drawer: {
      width: 240,
    },
  },
  typography: {
    fontFamily: '\'Roboto\', sans-serif',
  },
});

export default theme;
