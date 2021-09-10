import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  Link
} from "react-router-dom";
const PostCard = (props) =>{
    //const { postId } = props
    const { postId , title, description, image = "" } = props
    console.log(postId)
    return (
          <Card top width="100%">
                  <CardImg top src="https://picsum.photos/200" alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">{ title }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{ description }</CardText>
                    <Link to={ `/post-detail/${ postId }` }>Ver Detalle</Link>
                  </CardBody>
            </Card>
    )
}
export default PostCard;