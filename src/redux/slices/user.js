import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../../service/user';
import { getItem } from '../../utils/localStorage';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  userInfo: null,
  token: getItem('token'),
  isLogin: false,
  status: IDLE,
  error: null,
};

export const login = createAsyncThunk('user/login', async (user) => {
  const { headers, data } = await UserService.login(user);
  return { token: headers.authorization, data };
});

export const register = createAsyncThunk('user/register', async (newUser) => {
  const res = await UserService.register(newUser);
  return res.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.isLogin = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.token = action.payload.token;
        state.userInfo = action.payload.data;
        state.isLogin = true;
        localStorage.setItem('token', action.payload.token);
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

export const { logout } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.userInfo;

export default userSlice.reducer;
