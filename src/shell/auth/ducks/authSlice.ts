import { IUser } from '../../../interfaces/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthInitialState {
  data: {
    user: IUser | null;
  };
  loading: boolean;
  error: Error | null;
}

const initialState: AuthInitialState = {
  data: {
    user: null,
  },
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserAction(state) {
      return {
        data: {
          user: null,
        },
        loading: true,
        error: null,
      };
    },
    setUserAction(state, action: PayloadAction<IUser | null>) {
      return {
        data: {
          user: action.payload,
        },
        loading: false,
        error: null,
      };
    },
    setUserErrorAction(state, action: PayloadAction<Error>) {
      return {
        data: {
          user: null,
        },
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { reducer } = authSlice;
export const {
  getUserAction,
  setUserAction,
  setUserErrorAction,
} = authSlice.actions;
