import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const CommentsCard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Author</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui lacus. Etiam viverra luctus nisl, non hendrerit erat mollis quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent mollis ultrices dolor, quis imperdiet sapien pellentesque nec. Phasellus feugiat enim eros, at efficitur nunc luctus congue.  </CardText>
        </CardBody>
        <div>
        <Button color="link">👍 likes</Button>
        </div>
      </Card>
    </div>
  );
};

export default CommentsCard;