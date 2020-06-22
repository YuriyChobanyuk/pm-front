import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { NoteTag, INoteContent } from '../../../interfaces/note.interface';
import MultiselectDropdown from '../../../common/components/multiselect-dropdown/MultiselectDropdown';

interface Props {
  addOneNoteAction: (note: INoteContent) => void;
}

const AddNoteForm: React.FC<Props> = ({ addOneNoteAction }) => {
  const validationSchema = yup.object({
    title: yup.string().max(255).required(),
    text: yup.string().max(2000).required(),
    tags: yup.array().of(yup.string()),
  });
  const initialState: INoteContent = {
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
        {({ values, handleSubmit, errors, touched, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <div className="col-4">
                <Form.Group controlId="note-title">
                  <Field
                    as={Form.Control}
                    name="title"
                    type="text"
                    placeholder="Note title"
                    isValid={touched.title && !errors.title}
                    isInvalid={!!(touched.title && errors.title)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
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
                    isValid={touched.text && !errors.text}
                    isInvalid={!!(touched.text && errors.text)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.text}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Row>
            <Button variant="primary" type="submit" disabled={!isValid}>
              submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNoteForm;
