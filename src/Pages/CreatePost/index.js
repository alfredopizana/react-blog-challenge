import React, {useState, useEffect} from 'react'
import api from '../../lib/api'
import { Button, Form, FormGroup, Label, Input, FormFeedback, UncontrolledTooltip, TooltipContent } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function CreatePost() {
  const [postData, setPostData] = useState({})
  const [isTitleValid, setIsTitleValid] = useState(true)
  const [globalMessage, setGlogalMessage] = useState()
   const formHandler = (event) =>{
     const {name, value} = event.target
     setPostData({...postData, [name]:value})
   } 
   useEffect( ()=>{
     console.log(postData)
    // postData.title === "" ? setIsTitleValid(false) : setIsTitleValid(true)
     setIsTitleValid(!(postData.title === "" ))
   },[postData])

   const saveData = async (event)=>{
    if(isTitleValid){
     
      const result = await api.createPost(postData)
    } else {
      setGlogalMessage("Verifica que los campos sean correctos")
      setTimeout(function () { 
         setGlogalMessage("")
       },2000)
    }
   }

    return (
      <>
      <Form>
        <div>
          {
            globalMessage 
          }
        </div>
      <FormGroup>
        <Label for="exampleTitle">Title</Label>
        <Input invalid =  {
        !isTitleValid
        } 
        type="text" name="title" id="exampleTitle" onChange= {formHandler} />
        
        {
        !isTitleValid &&
          <FormFeedback>
          Este valor es requerido
          </FormFeedback>
        }
        
      </FormGroup>
      <FormGroup>
        <Label for="exampleSummary">Summary</Label>
        <Input type="text" name="summary" id="exampleSummary" onChange= {formHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleImage">Image URL</Label>
        <Input type="text" name="image" id="exampleImage" onChange= {formHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleDescription">Description</Label>
        <Input type="textarea" name="description" id="exampleDescription" onChange= {formHandler}/>
      </FormGroup>
      <Button type="button" onClick= {saveData} id="ScheduleUpdateTooltip" >Create Post</Button>
      
    </Form>
    </>
    )
}
export default CreatePost;