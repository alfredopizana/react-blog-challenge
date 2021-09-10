import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { CardColumns } from "reactstrap"
import api from "../../lib/api"
import PostCard from '../../Components/PostCard'
function Posts() {
    const [ postsData, setPostData ] = useState({});


    useEffect(async () =>{
        let postDetailData = await api.getAllPosts()
        setPostData( postDetailData );
        console.log(postDetailData)
    }, [])
    return (
        <>
            <h1>Posts</h1>
            <CardColumns>
            {
                    Object.keys(postsData).map(key =>{ return( <PostCard key={key} postId={key} postData={ { postId: key ,...postsData[key]} } />) })
            }
            </CardColumns>
        </>
    )
}
export  default Posts;