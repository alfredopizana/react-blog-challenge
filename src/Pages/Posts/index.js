import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import api from "../../lib/api"
function Posts() {
    const [ postsData, setPostData ] = useState();


    useEffect(async () =>{
        let postDetailData = await api.getAllPosts()
        setPostData( postDetailData );
        console.log(postDetailData)
    }, [])
    return (
        <>
        <h1>Posts</h1>
        {
            <ul>

            </ul>
        }
        </>
    )
}
export  default Posts;