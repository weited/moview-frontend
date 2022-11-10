import React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FooterWrapper = styled('footer')({ marginTop: '40px' });

const Container = styled(Box)`
  margin-top: 60px;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Divider />
        MoView 2022
      </Container>
    </FooterWrapper>
  );
}
