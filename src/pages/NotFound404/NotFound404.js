import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import pagenotfoundImage from '../../assets/img/pagenotfound.jpg';

const Section = styled('section')({
  textAlign: 'center',
});

const Button = styled(MuiButton)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

function NotFound404() {
  const navigate = useNavigate();
  return (
    <Section>
      <h1>Oops..! 404 Page Not Found</h1>
      <Button variant="contained" onClick={() => navigate('/')}>
        Back to Home
      </Button>
      <p>Looks like you came to wrong page on our server</p>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 500,
        }}
        alt="404 not found image."
        src={pagenotfoundImage}
      />
    </Section>
  );
}

export default NotFound404;
