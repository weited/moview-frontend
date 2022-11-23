import React, { useState } from 'react';
import {
  ContainerStyle,
  HeaderStyle,
  SectionStyle,
  LableStyle,
  InputeStyle,
  TextStyle,
  NameLableStyle,
  NameContainer,
  NameInputeStyle,
  SelfInofInputeStyle,
  PhotoButtonStyle,
  SubmitButtonStyle,
} from './Detail.styled';

function PersonalDetail() {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
  };

  return (
    <ContainerStyle onSubmit={handleSubmit}>
      <HeaderStyle>
        <h2>Personal Detail</h2>
        <PhotoButtonStyle>Choose a photo</PhotoButtonStyle>
      </HeaderStyle>
      <SectionStyle>
        <LableStyle htmlFor="email">
          <TextStyle>E-mail</TextStyle>
          <InputeStyle
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </LableStyle>
        <LableStyle htmlFor="username">
          <TextStyle>Username</TextStyle>
          <InputeStyle
            type="username"
            name="username"
            placeholder="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </LableStyle>
        <NameContainer>
          <NameLableStyle htmlFor="firstname">
            <TextStyle>First Name</TextStyle>
            <NameInputeStyle
              type="firstname"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </NameLableStyle>
          <NameLableStyle htmlFor="lastname">
            <TextStyle>Last Name</TextStyle>
            <NameInputeStyle
              type="lastname"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </NameLableStyle>
        </NameContainer>
        <LableStyle htmlFor="selfIntroduction">
          <TextStyle>Self Introduction</TextStyle>
          <SelfInofInputeStyle
            type="selfIntroduction"
            name="selfIntroduction"
            value={formValues.selfIntroduction}
            onChange={handleChange}
          />
        </LableStyle>
        <LableStyle htmlFor="resetPassword">
          <TextStyle>Reset Password</TextStyle>
          <InputeStyle
            type="resetPassword"
            name="resetPassword"
            value={formValues.reset}
            onChange={handleChange}
          />
        </LableStyle>
        <LableStyle htmlFor="repeatPassword">
          <TextStyle>Repeat Password</TextStyle>
          <InputeStyle
            type="repeatPassword"
            name="repeatPassword"
            value={formValues.repeat}
            onChange={handleChange}
          />
        </LableStyle>
      </SectionStyle>
      <SubmitButtonStyle>Submit</SubmitButtonStyle>
    </ContainerStyle>
  );
}

export default PersonalDetail;
