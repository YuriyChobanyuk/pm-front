import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

const Note = () => {
  return (
    <Card className="mb-4" bg="light">
      <Card.Body>
        <Card.Title className="mb-4">
          <h4>Card Title</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex">
          <Badge variant="secondary" className="mr-2 badge-pill">
            Secondary
          </Badge>
          <Badge variant="info" className="badge-pill">
            Info
          </Badge>
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <span>2 days ago</span>
        <div>
          <Button variant="primary" size="sm" className="mr-2">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button variant="success" size="sm">
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
