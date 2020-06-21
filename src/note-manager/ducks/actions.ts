import { INote } from '../../interfaces/note.interface';
import { createAction } from '@reduxjs/toolkit';

export const addOneNoteAction = createAction<INote>('note/addOneNote');
