import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

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
const StyledFormText = styled.form`
  width: 100%;
  padding: 50px;
`;
const Styledlabel = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
`;
const StyledError = styled.h4`
  margin-bottom: 5px;
  font-size: 12px;
  color: red;
`;
const StyledButton = styled.button`
  display: block;
  background-color: ${(props) => props.theme.colors.button_purple};
  color: ${(props) => props.theme.colors.text_light_gray};
  font-size: 0.9rem;
  border: 0;
  border-radius: 25px;
  height: 40px;
  width: 120px;
  padding: 0 20px;
  cursor: pointer;
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
const initialValues = {
  email: '',
  name: '',
  password: '',
  passwordRepeat: '',
};
function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.preventDefault();
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      if (!values.name) {
        errors.name = 'Required';
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
  return (
    <>
      <PageStyle />
      <Container>
        <Logo />
      </Container>
      <StyledFormWrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTitle>Register</StyledTitle>
          <StyledFormText>
            <Styledlabel htmlFor="email">
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
            </Styledlabel>
            <Styledlabel htmlFor="name">
              Name
              <StyledInput
                type="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <StyledError>{formik.errors.name}</StyledError>
              ) : null}
            </Styledlabel>
            <Styledlabel htmlFor="password">
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
            </Styledlabel>
            <Styledlabel htmlFor="passwordRepeat">
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
            </Styledlabel>
            <StyledButton
              type="submit"
              onClick={() => navigate('/login')}
              disabled={!formik.isValid}
            >
              Register
            </StyledButton>
          </StyledFormText>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}
export default Register;
