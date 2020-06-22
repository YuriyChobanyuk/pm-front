import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Note from './components/note/Note';
import NotesToolbar from './components/notes-toolbar/NotesToolbar';
import { RootState } from '../rootReducer';
import { getAllNotesSelector } from './ducks/selector';
import { getNotesAction } from './ducks/notesSlice';
import { addOneNoteAction } from './ducks/actions';
import { INote, INoteContent } from '../interfaces/note.interface';
import { completeNoteAction } from './ducks/actions';

interface Props {
  notes: INote[];
  getNotesAction: () => void;
  addOneNoteAction: (note: INoteContent) => void;
  completeNoteAction: (note: INote) => void;
}

const NoteManager: React.FC<Props> = ({
  notes,
  getNotesAction,
  addOneNoteAction,
}) => {
  useEffect(() => {
    getNotesAction();
  }, [getNotesAction]);

  return (
    <>
      <NotesToolbar addOneNoteAction={addOneNoteAction} />
      <div className="container">
        <div className="row">
          {!notes.length && <div>no notes</div>}
          {notes.map((note) => (
            <div className="col-md-4" key={note.id}>
              <Note note={note} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  notes: getAllNotesSelector(state),
});

const mapDispatchToProps = {
  getNotesAction,
  addOneNoteAction,
  completeNoteAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteManager);
