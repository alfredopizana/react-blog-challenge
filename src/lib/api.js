const BASE_URL = "https://react-blog-challenge-default-rtdb.firebaseio.com/";

export default {
    async createPost( postData ){

    },
    async getAllPosts(){
        let data =  await fetch(`${BASE_URL}/posts/.json`)
        return data.json()
    },
    async getPostById( postId ){

    }
}