import { IUser } from '../../../../interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './types';

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

const {reducer: authReducer, actions} = createSlice({
  name: AUTH_SLICE_NAME,
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

export default authReducer;
export const {
  getUserAction,
  setUserAction,
  setUserErrorAction,
} = actions;
