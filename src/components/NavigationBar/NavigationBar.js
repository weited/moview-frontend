import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Container = styled.div(
  ({ theme }) => `
  padding: 20px 20px 20px 10px;
  background-color: ${theme.palette.primary.background_gray};
  color: ${theme.palette.primary.text_light_gray};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width:${theme.breakpoints.largeLaptop}) {
    padding: 40px 40px 40px 10px;
}
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
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Logo />
        <Box
          sx={{
            width: { xs: '40%', sm: '55%' },
          }}
        >
          <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
        </Box>
        <UserInfo onClick={() => isLogin || navigate('/login')}>
          {isLogin ? 'User Name' : 'Sign in'}
        </UserInfo>
        <AccountCircleIcon sx={{ fontSize: { sm: 50, lg: 75 }, color: '#D0D0D0' }} />
      </Container>
    </div>
  );
}
