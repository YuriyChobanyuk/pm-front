import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { INote, NoteTag } from '../../../interfaces/note.interface';
import { variant } from '../../../interfaces/bootstrap-typing';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface Props extends INote {}

const Note: React.FC<Props> = ({ tags, text, title, creationDate }) => {
  const getTagVariant = (noteTag: string): variant => {
    switch (noteTag) {
      case NoteTag.INFO:
        return 'info';
      case NoteTag.URGENT:
        return 'danger';
      case NoteTag.WORK:
        return 'warning';
      default:
        return 'secondary';
    }
  };
  return (
    <Card className="mb-4" bg="light">
      <Card.Body>
        <Card.Title className="mb-4">
          <h4>{title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex">
          {tags.map((tag) => (
            <Badge variant={getTagVariant(tag)} className="mr-2 badge-pill">
              {tag}
            </Badge>
          ))}
        </Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <span>
          {creationDate
            ? `${formatDistanceToNow(new Date(creationDate))} ago`
            : 'unknown'}
        </span>
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
