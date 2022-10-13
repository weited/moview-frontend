import { createTheme } from '@mui/material/styles';

// option refer to https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: '#5E5962', // TODO: change to our design
      background_gray: '#7E7F81',
      background_dark_gray: '#464249',
      text_light_gray: '#EDEDED',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  breakpoints: {
    miniMobile: '0px',
    mobile: '320px',
    tablet: '576px',
    laptop: '768px',
    largeLaptop: '1024px',
    desktop: '1440px',
    largeDesktop: '1920px',
    wideScreen: '2560px',
  },
});

export default theme;
