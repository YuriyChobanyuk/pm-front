import { INote, INoteContent } from '../../interfaces/note.interface';
import { createAction } from '@reduxjs/toolkit';

export const addOneNoteAction = createAction<INoteContent>('note/addOneNote');
export const completeNoteAction = createAction<INote>('note/completeNote');
