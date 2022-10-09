import { createTheme } from '@mui/material/styles';

// option refer to https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // TODO: change to our design
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

export default theme;
