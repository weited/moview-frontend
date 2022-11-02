import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsByPostId, createComments } from '../../../redux/slices/comment';

const Container = styled.form(
  ({ isDisplay }) => `
    width: 100%;
    display:${isDisplay ? 'flex' : 'none'};
    padding:20px 0;
    flex-direction:column;
    align-items: flex-end;
    `
);

const Notification = styled.p(
  ({ isDisplay }) => `
  display:${isDisplay ? 'block' : 'none'};
  margin: 5px;
  font-size: 12px;
  color:red;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`
);
const StyledButton = styled(Button).attrs({
  variant: 'contained',
})`
  margin-top: 15px;
  border-radius: 25px;
`;

function CreateNewComment({ name, isDisplay, handleCancel, parentId }) {
  const [comment, setComment] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const { id: postId } = useParams();
  // TODO get user ID from state
  // const user = useSelector((state) => state.user.userId);
  const userId = 2;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowNotification(comment.length === 0);
    if (comment.length !== 0) {
      const commentPayload = {
        text: comment,
        postId,
        userId,
        parentId: parentId || null,
      };
      const res = await dispatch(createComments(commentPayload));
      if (res) {
        handleCancel('');
        setComment('');
        await dispatch(getCommentsByPostId(postId));
      }
    }
  };
  return (
    <Container isDisplay={isDisplay} onSubmit={handleSubmit}>
      <TextField
        id="outlined-multiline-static"
        label={`Comment ${name ? `to ${name}` : ''}`}
        multiline
        fullWidth
        minRows={6}
        placeholder="Say something..."
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />
      <Notification isDisplay={showNotification}>
        Oops... You haven&quot;t write a comment yet
      </Notification>

      <Grid container direction="row" justifyContent="flex-end" alignItems="center" gap="10px">
        <StyledButton
          type="reset"
          onClick={() => {
            setShowNotification(false);
            handleCancel('');
          }}
        >
          Cancel
        </StyledButton>
        <StyledButton type="submit">Submit</StyledButton>
      </Grid>
    </Container>
  );
}
export default CreateNewComment;
