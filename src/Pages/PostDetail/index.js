import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Card } from 'reactstrap';
import PostCard from '../../Components/PostCard';
import CommentsCard from '../../Components/CommentsCard';
import Comments from '../../Components/CommentsForm';
import api from "../../lib/api"

function PostDetail() {
    
    let { slug } = useParams()
    console.log(slug)

    const [postDataById, setPostDataById] = useState({})
   // const {postId}  = useParams()
    //console.log("este es el id del producto:" + postId)
    console.log(useParams() )
    useEffect (async ()=>{
     const result = await api.getPostById( slug )
     setPostDataById(result)
     console.log("este el resultado del get by id" , result)
    }, [])


    return (
      <>
        <h1>Post Detail { slug }</h1>
            <Card>
              <PostCard postData = {postDataById} />
            {

                    //Object.keys(postDataById).map(key =>{ return( <PostCard key={key} postId={key} postData={ { postId: key ,...postDataById[key]} } />) })
            }
            </Card>
        <section id="comments">
          <Comments />
          <CommentsCard/>
        </section>
        
        </>
        
    )
}
export  default PostDetail;