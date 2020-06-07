import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Note = () => {
  return (
    <Card className="mb-4" bg="light">
      <Card.Body>
        <Card.Title className="mb-4">
          <h4>Card Title</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex">
          <Badge variant="secondary" className="mr-2">
            Secondary
          </Badge>
          <Badge variant="info">Info</Badge>
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-secondary" size="sm" className="mr-2">
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </Button>
        <Button variant="success" size="sm">
          Complete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Note;
