import { createTheme } from '@mui/material/styles';

// option refer to https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: '#5E5962', // TODO: change to our design
      background_gray: '#7E7F81',
      background_light_gray: '#F1F1F1',
      background_dark_gray: '#464249',
      background_light_yellow: '#F8F8F8',
      text_light_gray: '#EDEDED',
      signin_register_light_purple: '#696784',
      register_password_blue: '#227ACA',
    },
    secondary: {
      main: '#edf2ff',
      background_light_gray: '#E3E3E3',
    },
  },
  colors: {
    /* List of all the colors, non-semantic */
    background_lightest_grey: '#F8F8F8',
    background_lighter_grey: '#F1F1F1',
    background_light_grey: '#E3E3E3',
    background_grey: '#7E7F80',
    button_purple: '#696784',
    background_light_purple: '#5E5962',
    background_purple: '#464249',
    text_light_grey: '#EDEDED',
    text_highlight_grey: '#DFDFDF',
    text_blue: '#227ACA',

    /* The following would be the colors with semantic name corresponding to each component */
    /* Sign in & Register Page colors */
    globalBG_grey: '#F8F8F8', // this globalBG could be used as the big area BG color in every page
    signInBG_grey: '#F8F8F8',
    inputBG_grey: '#E3E3E3',
    submitButton_purple: '#696784',
    registerForgotPWD_blue: '#227ACA',

    /* Home Page Swiper section colors */
    homePageBG_grey: '#7E7F80',
    searchBG_purple: '#464249',
    swiperBG_purple: '#464249',
    swiperCardBG_purple: '#5E5962',

    /* Home Page Review section colors */
    reviewBG_grey: '#E3E3E3',
    sortByBG_grey: '#E3E3E3',
    sortBy_highlight_grey: '#7E7F80',
    trendingTagBG_grey: '#E3E3E3',
    trendingTagBG_iPhone_grey: '#F1F1F1',
    tagCardBG_grey: '#CECECE',
    category_highlight_grey: '#E3E3E3',
    highlighted_text_grey: '#DFDFDF',

    /* Post Page colors */
    columnsBG_grey: '#F1F1F1',
    otherReviewsBG_grey: '#E3E3E3',
    commentsBG_grey: '#F1F1F1',

    /* User Page colors */
    authorInfoBG_grey: '#F1F1F1',
    userTagBG_grey: '#F1F1F1',
    userTagCardBG_grey: '#E3E3E3',
    clicksBG_grey: '#E3E3E3',
    userReviewBG_grey: '#F1F1F1',

    /* Movie Page colors (sortBy & button colors are in global) */
    introductionBG_grey: '#F1F1F1',
    movieTagBG_grey: '#F1F1F1',
    movieTagCardBG_grey: '#E3E3E3',
    movieReviewBG_grey: '#F1F1F1',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 320,
      tablet: 576,
      laptop: 768,
      largeLaptop: 1024,
      desktop: 1440,
      largeDesktop: 1920,
      wideScreen: 2560,
    },
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
