import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../../service/user';
import { getItem } from '../../utils/localStorage';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  user: {},
  token: getItem('token'),
  status: IDLE,
  error: null,
};

export const login = createAsyncThunk('user/login', async (user) => {
  const res = await UserService.login(user);
  return res.headers.authorization;
});

export const register = createAsyncThunk('user/register', async (newUser) => {
  const res = await UserService.register(newUser);
  return res.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = FETCH_SUCCEEDED;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectCurrentUser = (state) => state.user.user;

export default userSlice.reducer;
