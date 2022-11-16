import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../../components/SignInForm/SignIn';

function Login() {
  const { isLogin } = useSelector((state) => state.user);
  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return <SignIn />;
}

export default Login;
