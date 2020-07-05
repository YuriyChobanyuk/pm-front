import React from 'react';
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import AddNoteForm from '../add-note-form/AddNoteForm';

import classes from './notes-toolbar.module.scss';
import { INoteContent } from '../../../interfaces/note.interface';
import { useAnimateHeight } from '../../../common/hooks/animate-height-hook';

interface Props {
  addOneNoteAction: (note: INoteContent) => void;
}

const NotesToolbar: React.FC<Props> = ({ addOneNoteAction }) => {
  const [height, handleToggleForm] = useAnimateHeight(0);
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
