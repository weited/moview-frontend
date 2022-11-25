import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const NameInput = styled.h1`
  padding: 0 1.5em;
  margin-top: 1em;
`;

const SelfIntro = styled.h2`
  padding: 0 2em;
  margin: 0;
`;

const Description = styled.div`
  padding: 0 3em;
  margin-top: 0;
  margin-bottom: 1.5em;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  margin-left: 0;
`;

const PostNum = styled.div`
  margin-left: 2em;
`;

const LikesNum = styled.div`
  margin-left: 4em;
`;

const FavsNum = styled.div`
  margin-left: 4em;
`;
export default function UserInfo() {
  return (
    <Box
      sx={{
        maxwidth: 550,
        height: 300,
        borderStyle: 'solid',
        backgroundColor: '#e3e3e3',
        '&:hover': {
          backgroundColor: '#f1f1f1',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <NameInput>Account Name</NameInput>
      <SelfIntro>Self Introduction</SelfIntro>
      <Description>I like Movie</Description>
      <Container>
        <PostNum>Posts: 15</PostNum>
        <LikesNum>Likes: 239</LikesNum>
        <FavsNum>Favs: 36</FavsNum>
      </Container>
    </Box>
  );
}
