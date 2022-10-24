import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Google from '../../assets/icons/google.png';
import Facebook from '../../assets/icons/facebook.png';
import Twitter from '../../assets/icons/twitter.png';
import Logo from '../Logo/Logo';

import {
  PageColor,
  SigninStyle,
  TextStyle,
  TextStyleP,
  FormStyle,
  Container,
  SigninButtonStyle,
  LongButtonStyle,
  RegisterButton,
  PasswordButton,
} from './Signin.styled';

function Signin() {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = '^(?=\\S*[a-zA-Z])(?=\\S*[0-9#!"$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~]).{8,}$';

    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more that 8 characters';
    } else if (values.password.length > 15) {
      errors.password = 'Password canot exceed more than 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(!isSubmit);
  };

  return (
    <>
      <PageColor />
      <Logo />
      <Container>
        <FormStyle onSubmit={handleSubmit}>
          <SigninStyle>Sign in</SigninStyle>
          <TextStyle>Email</TextStyle>
          <TextField
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
            sx={{
              width: { sm: 200, md: 300 },
              backgroundColor: 'white',
            }}
          />
          <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.email}</p>
          <TextStyle>Password</TextStyle>
          <TextField
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
            sx={{ width: { sm: 200, md: 300 }, backgroundColor: 'white' }}
          />
          <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.password}</p>
          <SigninButtonStyle>Sign in</SigninButtonStyle>
        </FormStyle>
        <TextStyleP>
          Don&apos;t have an account?{' '}
          <RegisterButton onClick={() => navigate('/register')}>Register here</RegisterButton>
          <PasswordButton>Forgot password</PasswordButton>
        </TextStyleP>
        <LongButtonStyle>
          <img src={Google} alt="google" width="20px" />
          Sign in with Google
        </LongButtonStyle>
        <LongButtonStyle>
          <img src={Facebook} alt="Facebook" width="20px" />
          Sign in with Facebook
        </LongButtonStyle>
        <LongButtonStyle>
          <img src={Twitter} alt="Twitter" width="20px" />
          Sign in with Twitter
        </LongButtonStyle>
      </Container>
    </>
  );
}
export default Signin;
