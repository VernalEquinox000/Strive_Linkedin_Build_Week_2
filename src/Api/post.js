export const getAllPosts = async () => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/posts/ `;
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.reverse();
  } catch (error) {
    console.log(error);
  }
};
export const getSinglePost = async (postId) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/posts/${postId} `;
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export const AddPost = async (body) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/posts/`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;

  } catch (err) {
    console.log(err);
  }
};
export const EditPost = async (postId, body) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const DeletePost = async (postId) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
    const response = await fetch(url, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};



export const UploadMyPhotoPost = async (postId,body)=>{

    try{
        const url = `https://striveschool-api.herokuapp.com/api/posts/${postId}`

        let response = await fetch(url,{
            method:"POST",
            body,
            headers:{
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            }
        })
    }catch(error){
        console.log(error)
    }
    
}

export const UploadMyPhoto = async (userId, body) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;

    let response = await fetch(url, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

