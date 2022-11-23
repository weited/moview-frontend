import styled from 'styled-components';
import { Button } from '@mui/material';

export const ContainerStyle = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const HeaderStyle = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const SectionStyle = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const LableStyle = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '18px',
  fontFamily: 'bold',
}));

export const InputeStyle = styled.input(({ theme }) => ({
  height: '40px',
  width: '600px',
  backgroundColor: theme.colors.inputBG_grey,
  borderCadius: '10px',
  borderSize: '1px',
  borderStyle: 'solid',
  borderColor: theme.colors.inputBG_grey,
  marginTop: '10px',
  marginBottom: '10px',
  padding: '20px',
}));

export const NameContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  fontSize: '18px',
  fontFamily: 'bold',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const TextStyle = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const NameLableStyle = styled.div(() => ({
  fontSize: '18px',
  fontFamily: 'bold',
}));

export const NameInputeStyle = styled.input(({ theme }) => ({
  width: '250px',
  height: '40px',
  backgroundColor: theme.colors.inputBG_grey,
  borderSize: '1px',
  borderStyle: 'solid',
  borderColor: theme.colors.inputBG_grey,
  marginTop: '10px',
  marginBottom: '10px',
}));

export const SelfInofInputeStyle = styled.input(({ theme }) => ({
  width: '600px',
  height: '200px',
  backgroundColor: theme.colors.inputBG_grey,
  borderSize: '1px',
  borderStyle: 'solid',
  borderColor: theme.colors.inputBG_grey,
  marginTop: '10px',
  marginBottom: '10px',
}));

export const PhotoButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.background_light_grey,
  color: '#9D9D9D',
  margin: 5,
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  textTransform: 'unset',
}));

export const SubmitButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.button_purple,
  color: 'white',
  margin: 5,
  textTransform: 'unset',
  width: '100px',
  height: '40px',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: 'black',
  },
}));
