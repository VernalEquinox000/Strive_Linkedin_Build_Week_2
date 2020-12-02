export const getAllPosts =async ()=>{

    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/ `;
        const response = await fetch(url, {
            method: "GET",
         
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              "Content-Type": "application/json",
            },
          }); 

          return await  response.json()

    }catch(error){
        console.log(error)
    }



}
export const getSinglePost =async (postId)=>{

    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/${postId} `;
        const response = await fetch(url, {
            method: "GET",
         
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              "Content-Type": "application/json",
            },
          }); 

          return await  response.json()

    }catch(error){
        console.log(error)
    }



}
export const AddPost= async (body)=>{

  
      
 
    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              "Content-Type": "application/json",
            },
          });
          return response

    }catch (err) {
        console.log(err);
    }
    
}
export const EditPost = async(postId)=>{

    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(),
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              "Content-Type": "application/json",
            },
          });
          return response
  
    }catch(error){
      console.log(error)
    }
  }

  export const DeletePost = async(postId)=>{

    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
        const response = await fetch(url, {
            method: "DELETE",
         
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              
              
            },
          }); 

          return await response.json()


    }catch(error){
        console.log(error)
    }
  }
