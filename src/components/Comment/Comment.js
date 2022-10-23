import React from 'react';
import styled from 'styled-components';
import BackgroundLetterAvatars from '../LetterAvatar';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 800;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const CommentContainer = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background_light_gray};
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const SingleComment = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background_light_gray};
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
function Comment() {
  return (
    <Container>
      <Title>5 Comments</Title>
      <CommentContainer>
        <SingleComment>
          <BackgroundLetterAvatars />
          this is a comment
        </SingleComment>
        <SingleComment>this is a comment</SingleComment>
      </CommentContainer>
    </Container>
  );
}

export default Comment;
