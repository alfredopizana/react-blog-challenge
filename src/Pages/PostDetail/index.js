import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import api from "../../lib/api"

function PostDetail() {
    
    let { slug } = useParams()
    console.log(slug)



    return (
        <h1>Post Detail { slug }</h1>
    )
}
export  default PostDetail;