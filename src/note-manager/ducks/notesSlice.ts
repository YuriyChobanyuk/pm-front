import { INote } from '../../interfaces/note.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotesInitialState {
  data: {
    notes: INote[];
  };
  loading: boolean;
  error: Error | null;
}

const initialState: NotesInitialState = {
  data: {
    notes: [],
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
        ...state,
        data: {
          notes: [],
        },
        loading: true,
        error: null,
      };
    },
    setNotesAction(state, action: PayloadAction<INote[]>) {
      return {
        ...state,
        data: {
          notes: action.payload,
        },
        loading: false,
        error: null,
      };
    },
    setNotesErrorAction(state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    setOneNoteAction(state, action: PayloadAction<INote>) {
      return {
        ...state,
        data: {
          notes: [action.payload, ...state.data.notes],
        },
        loading: false,
        error: null,
      };
    },
    getOneNoteAction(state, action: PayloadAction<void>) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    removeNoteAction(state, action: PayloadAction<INote>) {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          notes: state.data.notes.filter(
            (note) => note.id !== action.payload.id
          ),
        },
      };
    },
  },
});

export const { reducer } = authSlice;
export const {
  getNotesAction,
  setNotesAction,
  setNotesErrorAction,
  getOneNoteAction,
  setOneNoteAction,
  removeNoteAction,
} = authSlice.actions;
