import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetail';

function PersonalInfo() {
  const { isLogin } = useSelector((state) => state.user);
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }
  return <PersonalDetails />;
}

export default PersonalInfo;
