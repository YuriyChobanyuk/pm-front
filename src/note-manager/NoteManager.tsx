import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Note from './components/note/Note';
import NotesToolbar from './components/notes-toolbar/NotesToolbar';
import { RootState } from '../rootReducer';
import { getAllNotesSelector } from './ducks/selector';
import { getNotesAction } from './ducks/notesSlice';
import { addOneNoteAction } from './ducks/actions';
import { INote } from '../interfaces/note.interface';

interface Props {
  notes: INote[];
  getNotesAction: () => void;
  addOneNoteAction: (note: INote) => void;
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
            <div className="col-md-4">
              <Note {...note} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteManager);
