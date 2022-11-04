import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CommentService from '../../service/comment';

const initialState = {
  commentList: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const getCommentsByPostId = createAsyncThunk(
  'comment/getCommentsByPostId',
  async (postId) => {
    const res = await CommentService.getByPostId(postId);
    return res.data;
  }
);

export const createComments = createAsyncThunk('comment/createComments', async (comment) => {
  const res = await CommentService.create(comment);
  return res.data;
});
export const deleteComments = createAsyncThunk('comment/deleteComments', async (commentId) => {
  const res = await CommentService.delete(commentId);
  return res.data;
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByPostId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCommentsByPostId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentList = action.payload;
      })
      .addCase(getCommentsByPostId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createComments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentList = action.payload;
      })
      .addCase(createComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteComments.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(deleteComments.fulfilled, (state) => {
        state.status = false;
      })
      .addCase(deleteComments.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export const selectComment = (state) => state.comment.commentList;

export default commentSlice.reducer;
