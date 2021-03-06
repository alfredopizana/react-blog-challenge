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
        let response =  await fetch(`${BASE_URL}/posts/.json`)
        return await response.json()
    },
    async getPostById( postId ){
        let response = await fetch(`${BASE_URL}/posts/${ postId }/.json`)
        return await response.json()
    },
<<<<<<< HEAD
    async createComment(postComment){
        let data = await fetch(`${BASE_URL}/posts/${ postComment }/.json`,{
            method: 'POST', 
            headers:{
                'Content-type': 'aplication/son'
            },
            body:JSON.stringify(postComment)
        })
        return await data.json()
    },
=======
>>>>>>> main
    async updateReactionByPostId(postId,authorId)
    {
        let response = await fetch(`${BASE_URL}/posts/${ postId }/.json`)
        let post = await response.json()
<<<<<<< HEAD
        let { reactions = [] } = post
        const reactionPosition = reactions.indexOf(authorId)
        if(reactionPosition>=0){
            reactions.splice(reactionPosition, 1);
        }
        else{
            reactions.push(authorId);
=======
        if(post.reactions){
            let { reactions } = post
            const reactionPosition = reactions.indexOf(authorId)
            if(reactionPosition>=0){
                reactions.splice(reactionPosition, 1);
            }
            else{
                reactions.push(authorId);
            }
>>>>>>> main
        }
        let data = await fetch(`${BASE_URL}/posts/${postId}/.json`,{ 
            method: 'PATCH', 
            headers:{
                'Content-Type': 'aplication/json'
            },
            body:JSON.stringify({reactions})
<<<<<<< HEAD
            })
=======
         })
>>>>>>> main
        return await data.json()
    }
}