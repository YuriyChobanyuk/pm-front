import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { NoteTag, INote } from '../../../interfaces/note.interface';
import MultiselectDropdown from '../../../common/components/multiselect-dropdown/MultiselectDropdown';

interface Props {
  addOneNoteAction: (note: INote) => void;
}

const AddNoteForm: React.FC<Props> = ({ addOneNoteAction }) => {
  const validationSchema = yup.object({
    title: yup.string().max(255).required(),
    text: yup.string().max(2000).required(),
    tags: yup.array().of(yup.string()),
  });

  const initialState = {
    title: '',
    text: '',
    tags: [],
  };
  return (
    <div className="container pt-4">
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          addOneNoteAction(values);
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <div className="col-4">
                <Form.Group controlId="note-title">
                  <Field
                    as={Form.Control}
                    name="title"
                    type="text"
                    placeholder="Note title"
                  />
                </Form.Group>
                <MultiselectDropdown
                  options={[NoteTag.INFO, NoteTag.URGENT, NoteTag.WORK]}
                  name="tags"
                  values={values.tags}
                  title="Add tags"
                />
              </div>
              <div className="col-8">
                <Form.Group controlId="note-text">
                  <Field
                    name="text"
                    as="textarea"
                    label="Text"
                    className="form-control"
                    rows={3}
                    placeholder="Note text"
                    style={{ resize: 'none' }}
                  />
                </Form.Group>
              </div>
            </Row>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                console.log({ errors });
              }}
            >
              submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNoteForm;
