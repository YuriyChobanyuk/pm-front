import React, { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import AddNoteForm from '../add-note-form/AddNoteForm';

import classes from './notes-toolbar.module.scss';
import { INoteContent } from '../../../interfaces/note.interface';

interface Props {
  addOneNoteAction: (note: INoteContent) => void;
}

const NotesToolbar: React.FC<Props> = ({ addOneNoteAction }) => {
  const [height, setHeight] = useState<string | number>(0);
  const openAddNoteForm = useCallback(() => setHeight('auto'), [setHeight]);
  const closeAddNoteForm = useCallback(() => setHeight(0), [setHeight]);
  const handleToggleForm = useCallback(() => {
    if (height === 0) {
      openAddNoteForm();
    } else {
      closeAddNoteForm();
    }
  }, [height, openAddNoteForm, closeAddNoteForm]);

  return (
    <div
      className={`p-4 mb-4 sticky-top bg-light 
      ${classes.notesToolbar}`}
    >
      <div className="container">
        <Button variant="primary" onClick={handleToggleForm}>
          Add note
        </Button>
      </div>

      <AnimateHeight duration={500} height={height}>
        <AddNoteForm addOneNoteAction={addOneNoteAction} />
      </AnimateHeight>
    </div>
  );
};

export default NotesToolbar;
