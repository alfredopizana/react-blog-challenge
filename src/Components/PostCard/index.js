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
    const { postId , title, description, image, summary, comments=[] } = props.postData
    console.log(postId)
    return (
          <Card top width="100%">
                  <CardImg top src= {image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">{ title }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{summary}</CardSubtitle>
                    <CardText>{ description }</CardText>
                    <Link to={ `/post-detail/${ postId }` }>Ver Detalle</Link>
                  </CardBody>
            </Card>
    )
}
export default PostCard;