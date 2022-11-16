import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../components/Logo/Logo';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const PageStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    height: 100%;
    margin: 0;
    background-color: ${(props) => props.theme.colors.background_lightest_grey};
    font-weight:700;
  }
`;
const Container = styled.div(
  ({ theme }) => `
  padding: 20px 20px 20px 10px;
  color: ${theme.colors.text_light_gray};
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

function Register() {
  const { isLogin } = useSelector((state) => state.user);
  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <PageStyle />
      <Container>
        <Logo />
      </Container>
      <RegisterForm />
    </>
  );
}
export default Register;
