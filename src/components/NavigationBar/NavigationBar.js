/* eslint-disable no-alert */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import MuiButton from '@mui/material/Button';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { logout } from '../../redux/slices/user';
import { selectIdToCreateReview } from '../../redux/slices/movie';

const Container = styled.header(
  ({ theme, isHomePage }) => `
  background-color: rgba(255,255,255,0.8);
  padding: 0 30px;
  color: ${isHomePage ? theme.colors.text_light_gray : theme.colors.background_light_purple};
  width: 100%;
  display: flex;
  position: sticky;
  top:0;
  z-index: 999;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(20px);
  border-style: solid;
  border-color: rgba(0,0,0,0.15);
  border-width: 0px 0px thin;
  `
);

const UserInfo = styled.span(
  ({ theme }) => `
  font-size: 15px;
  cursor: pointer;
  @media (min-width:${theme.breakpoints.largeLaptop}) {
    font-size: 24px;
}`
);

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.colors.button_purple,
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.colors.button_purple,
    opacity: 0.8,
  },
}));

export default function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();

  const movieId = useSelector(selectIdToCreateReview);
  const user = useSelector((state) => state.user);
  const { isLogin } = user;

  const isHomePage = path.pathname === '/';

  const isCreateReview =
    path.pathname.startsWith('/movie/') || path.pathname.startsWith('/review/');

  const isInCreateReview = path.pathname.includes('/new-review');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (!isLogin) {
      return;
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuth = () => {
    if (!isLogin) {
      navigate('/login');
    } else {
      dispatch(logout());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCreateReview = () => {
    if (!isLogin) {
      alert('Please login to create a review');
      return;
    }
    if (!isCreateReview) {
      alert('Please select a movie or review to create');
      return;
    }

    if (isInCreateReview) {
      return;
    }
    navigate(`/movie/${movieId}/new-review`);
  };

  return (
    <Container isHomePage={isHomePage}>
      <Logo />
      <Box
        sx={{
          width: { xs: '40%', sm: '55%' },
          padding: '16px',
        }}
      >
        <TextField fullWidth id="outlined-basic" label="" variant="outlined" size="small" />
      </Box>
      <Button variant="contained" onClick={handleCreateReview} disabled={isInCreateReview}>
        Create Review
      </Button>
      {!isLogin && <UserInfo onClick={handleAuth}>Sign in</UserInfo>}
      {isLogin && (
        <AccountCircleIcon
          onClick={handleClick}
          sx={{ fontSize: { sm: 50, lg: 64 }, color: '#D0D0D0', cursor: 'pointer' }}
        />
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: '200px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate('/personal-info')}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Container>
  );
}
