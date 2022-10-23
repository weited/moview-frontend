import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CommentService from '../../service/comment';
import SingleComment from './SingleComment';

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
  background-color: ${(props) => props.theme.palette.secondary.background_light_gray};
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const ParentComment = styled.div`
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const ChildComment = styled.div`
  padding-left: 40px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-left: 20px;
  }
`;

function Comment() {
  const [comments, setComments] = useState([]);
  const { id: postId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const res = await CommentService.getByPostId(postId);
      setComments(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {comments.length === 0 ? (
        <Title>0 Comment</Title>
      ) : (
        <>
          <Title>{comments.length === 1 ? '1 Comment' : `${comments.length} Comments`} </Title>
          <CommentContainer>
            {comments.map((parent) => (
              <ParentComment key={parent.id}>
                <SingleComment comment={parent} />
                {parent.childComment &&
                  parent.childComment.map((child) => (
                    <ChildComment key={child.id}>
                      <SingleComment comment={child} />
                    </ChildComment>
                  ))}
              </ParentComment>
            ))}
          </CommentContainer>
        </>
      )}
    </Container>
  );
}

export default Comment;
