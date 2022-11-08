import styled, { createGlobalStyle } from 'styled-components';

export const PageColor = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.primary.background_light_yellow};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignInStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextStyle = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const SignInButtonStyle = styled.button`
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primary.signin_register_light_purple};
  color: black;
  border: none;
  border-radius: 25px;
  width: 120px;
  height: 40px;
  align-self: center;
  font-size: 18px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scaleX(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 80px;
    font-size: 14px;
  }
`;

export const TextStyleP = styled.p`
  font-size: 9px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 5px;
  }
`;

export const RegisterButton = styled.span`
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: ${(props) => props.theme.palette.primary.register_password_blue};
`;

export const PasswordButton = styled.span`
  color: ${(props) => props.theme.palette.primary.register_password_blue};
  border: none;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 10px;
`;

export const LongButtonStyle = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black;
  width: 250px;
  border: 1px solid black rgba(0, 0, 0, 0.6);
  margin-bottom: 5px;
  border-radius: 15px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 150px;
    font-size: 10px;
  }
`;
