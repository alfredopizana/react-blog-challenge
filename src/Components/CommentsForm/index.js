import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Comments = (props) => {
  return (
    <Form class= "d-flex flex-column bg-light p-4">
      <FormGroup row>
        <Label for="exampleAuthor" sm={1}>Author</Label>
        <Col sm={6}>
          <Input type="text" name="Author" id="exampleAuthor" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={1}>Comment</Label>
        <Col sm={6}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 5 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Comments;