import React from 'react';
import Note from '../components/note/Note';
import NotesToolbar from '../components/notes-toolbar/NotesToolbar';

const NoteManager: React.FC = () => {
  const arr = [1, 2, 4, 5, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <NotesToolbar />
      <div className="container">
        <div className="row">
          {arr.map(() => (
            <div className="col-md-4">
              <Note />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteManager;
