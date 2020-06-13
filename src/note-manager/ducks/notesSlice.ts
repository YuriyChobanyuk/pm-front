import { INote } from '../../interfaces/note.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotesInitialState {
  data: {
    notes: INote[] | null;
  };
  loading: boolean;
  error: Error | null;
}

const initialState: NotesInitialState = {
  data: {
    notes: null,
  },
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getNotesAction(state) {
      return {
        data: {
          notes: null,
        },
        loading: true,
        error: null,
      };
    },
    setNotesAction(state, action: PayloadAction<INote[] | null>) {
      return {
        data: {
          notes: action.payload,
        },
        loading: false,
        error: null,
      };
    },
    setNotesErrorAction(state, action: PayloadAction<Error>) {
      return {
        data: {
          notes: null,
        },
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { reducer } = authSlice;
export const {
  getNotesAction,
  setNotesAction,
  setNotesErrorAction,
} = authSlice.actions;
