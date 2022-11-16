import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Google from '../../assets/icons/google.png';
import Facebook from '../../assets/icons/facebook.png';
import Twitter from '../../assets/icons/twitter.png';
import Logo from '../Logo/Logo';
import { login } from '../../redux/slices/user';
import { ALERT_SUCCESS, ALERT_ERROR } from '../../constants/alertType';

import {
  LogoStyle,
  PageColor,
  SignInStyle,
  TextStyle,
  TextStyleP,
  FormStyle,
  Container,
  SignInButtonStyle,
  SignInLoadingStyle,
  LongButtonStyle,
  StyledInput,
  RegisterButton,
  PasswordButton,
} from './SignIn.styled';

function SignIn() {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [alert, setAlert] = useState({
    open: false,
    message: null,
    type: null,
  });

  const { status } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = status === 'loading';
  const { open, message, type } = alert;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClose = () => {
    setAlert((pre) => ({ ...pre, open: false, message: null }));
  };

  const validate = (values) => {
    const errors = {};
    const regex = '^(?=\\S*[a-zA-Z])(?=\\S*[0-9#!"$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~]).{8,}$';

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!values.email.match(regex)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more that 8 characters';
    } else if (values.password.length > 15) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateResult = validate(formValues);
    setFormErrors(validateResult);
    if (Object.keys(validateResult).length === 0) {
      try {
        await dispatch(login(formValues)).unwrap();
        setAlert({ ...alert, open: true, message: 'Logged in successfully!', type: ALERT_SUCCESS });
        navigate('/', { replace: true });
      } catch (error) {
        setAlert({
          ...alert,
          open: true,
          message: 'Email or password incorrect!',
          type: ALERT_ERROR,
        });
      }
    }
  };

  return (
    <>
      <PageColor />
      <LogoStyle>
        <Logo />
      </LogoStyle>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <Container>
        <FormStyle>
          <SignInStyle>Sign in</SignInStyle>
          <TextStyle>Email</TextStyle>
          <StyledInput
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.email}</p>
          <TextStyle>Password</TextStyle>
          <StyledInput
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={{ fontSize: '10px', color: 'red' }}>{formErrors.password}</p>
          <SignInButtonStyle>
            <SignInLoadingStyle loading={loading} onClick={handleSubmit}>
              Sign in
            </SignInLoadingStyle>
          </SignInButtonStyle>
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
export default SignIn;
