import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/slices/user';
import { ALERT_SUCCESS, ALERT_ERROR } from '../../constants/alertType';

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StyledTitle = styled.title`
  display: block;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  margin: auto;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.text_light_gray};
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.text_light_gray};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 900px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const StyledFormText = styled.div`
  width: 100%;
  padding: 50px;
`;

const StyledLabel = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
`;

const StyledError = styled.h4`
  margin-bottom: 5px;
  font-size: 12px;
  color: red;
`;

const StyledButtonWrapper = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colors.button_purple};
  color: ${(props) => props.theme.colors.text_light_gray};
  font-size: 0.9rem;
  border: 0;
  border-radius: 25px;
  height: 40px;
  width: 120px;
  margin: auto;
  margin-top: 100px;
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

export const StyledLoadingButton = styled(LoadingButton)`
  width: 100%;
  height: 100%;
  color: black;
`;

function RegisterForm() {
  const [alert, setAlert] = useState({
    open: false,
    message: null,
    type: null,
  });
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.user);

  const loading = status === 'loading';
  const { open, message, type } = alert;

  const initialValues = {
    email: '',
    username: '',
    password: '',
    passwordRepeat: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { email, username, password } = values;
      try {
        await dispatch(register({ email, username, password })).unwrap();
        setAlert({
          ...alert,
          open: true,
          message: 'User registered successfully!',
          type: ALERT_SUCCESS,
        });
      } catch (error) {
        setAlert({
          ...alert,
          open: true,
          message: 'Something error!',
          type: ALERT_ERROR,
        });
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (!values.password.length >= 8 || !/[0-9]/.test(values.password)) {
        errors.password =
          'Your password must be at least 8 character long and contains at least one non-letter character.';
      }
      if (!values.passwordRepeat) {
        errors.passwordRepeat = 'Password needs to be matched.';
      } else if (values.passwordRepeat !== values.password) {
        errors.passwordRepeat = 'Password needs to be matched.';
      }
      return errors;
    },
  });

  const handleClose = () => {
    setAlert((pre) => ({ ...pre, open: false, message: null }));
  };

  return (
    <>
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
      <StyledFormWrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTitle>Register</StyledTitle>
          <StyledFormText>
            <StyledLabel htmlFor="email">
              Email
              <StyledInput
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <StyledError>{formik.errors.email}</StyledError>
              ) : null}
            </StyledLabel>
            <StyledLabel htmlFor="username">
              Username
              <StyledInput
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <StyledError>{formik.errors.name}</StyledError>
              ) : null}
            </StyledLabel>
            <StyledLabel htmlFor="password">
              Password
              <StyledInput
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <StyledError>{formik.errors.password}</StyledError>
              ) : null}
            </StyledLabel>
            <StyledLabel htmlFor="passwordRepeat">
              Repeat password
              <StyledInput
                type="password"
                name="passwordRepeat"
                value={formik.values.passwordRepeat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.passwordRepeat ? (
                <StyledError>{formik.errors.passwordRepeat}</StyledError>
              ) : null}
            </StyledLabel>
            <StyledButtonWrapper>
              <StyledLoadingButton
                type="submit"
                loading={loading}
                onClick={formik.onSubmit}
                disabled={!formik.isValid}
              >
                Register
              </StyledLoadingButton>
            </StyledButtonWrapper>
          </StyledFormText>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}
export default RegisterForm;
