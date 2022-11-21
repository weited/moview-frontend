import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';

const LogoImg = styled.img.attrs({
  src: logo,
})`
  height: 36px;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 32px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    height: 36px;
  }
`;

function Logo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== '/') {
      navigate('/');
    }
  };

  return <LogoImg onClick={handleClick} />;
}

export default Logo;
