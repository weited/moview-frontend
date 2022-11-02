import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsByPostId } from '../../redux/slices/comment';
import SingleComment from './SingleComment';
import CreateNewComment from './CreateNewComment';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Text = styled.p`
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
  text-align: right;
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const ChildComment = styled.div`
  width: 100%;

  padding-left: 40px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-left: 20px;
  }
`;

function Comment() {
  const dispatch = useDispatch();
  const [currentComment, setShowCurrentComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { id: postId } = useParams();
  const comments = useSelector((state) => state.comment.commentList);
  useEffect(() => {
    async function fetchData() {
      await dispatch(getCommentsByPostId(postId));
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Title>
        <Text>
          {comments.length} {comments.length > 1 ? 'Comments' : 'Comment'}
        </Text>
        <AddCommentOutlinedIcon
          sx={{ cursor: 'pointer' }}
          fontSize="large"
          onClick={() => setShowCommentInput(!showCommentInput)}
        />
      </Title>
      <CreateNewComment
        handleCancel={setShowCommentInput}
        isDisplay={comments.length === 0 || showCommentInput}
      />
      {comments.length > 0 && (
        <CommentContainer>
          {comments.map((parent) => (
            <ParentComment key={parent.id}>
              <SingleComment comment={parent} />
              <ModeCommentOutlinedIcon
                sx={{ cursor: 'pointer', alignSelf: 'flex-end' }}
                fontSize="small"
                onClick={() => setShowCurrentComment(parent.id)}
              />
              <CreateNewComment
                isDisplay={parent.id === currentComment}
                handleCancel={setShowCurrentComment}
                name={`${parent.user.firstName} ${parent.user.lastName}`}
                parentId={parent.id}
              />
              {parent.childComment &&
                parent.childComment.map((child) => (
                  <ChildComment key={child.id}>
                    <SingleComment comment={child} />
                  </ChildComment>
                ))}
            </ParentComment>
          ))}
        </CommentContainer>
      )}
    </Container>
  );
}
export const selectMovie = (state) => state.movie.movieList;
export default Comment;
