import React from 'react';
import { Button } from 'react-bootstrap';

const NotesToolbar = () => {
  return (
    <div className="p-4 mb-4 sticky-top bg-light d-flex justify-content-between">
      <div className="container">
        <Button variant="primary">Add note</Button>
      </div>
    </div>
  );
};

export default NotesToolbar;
