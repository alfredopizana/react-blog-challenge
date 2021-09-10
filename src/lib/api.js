import { CardBody } from "reactstrap";

const BASE_URL = "https://react-blog-challenge-default-rtdb.firebaseio.com/";

export default {
    async createPost( postData ){
        let data = await fetch(`${BASE_URL}/posts/.json`,{ 
            method: 'POST', 
            headers:{
                'Content-Type': 'aplication/json'
            },
            body:JSON.stringify(postData)
         })
        return await data.json()

    },
    async getAllPosts(){
        let data =  await fetch(`${BASE_URL}/posts/.json`)
        return data.json()
    },
    async getPostById( postId ){

    }
}