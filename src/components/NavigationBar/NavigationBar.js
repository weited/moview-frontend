import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { logout } from '../../redux/slices/user';

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
}
  `
);

export default function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();

  const user = useSelector((state) => state.user);
  const { isLogin } = user;

  const isHomePage = path.pathname === '/';

  const handleAuth = () => {
    if (!isLogin) {
      navigate('/login');
    } else {
      dispatch(logout());
    }
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
      <UserInfo onClick={handleAuth}>{isLogin ? 'Logout' : 'Sign in'}</UserInfo>
      <AccountCircleIcon sx={{ fontSize: { sm: 50, lg: 64 }, color: '#D0D0D0' }} />
    </Container>
  );
}
