export const getAllExperieces = async (id) => {
  try {
    console.log(id)
    const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
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

export const AddExperiece = async ({ id, body }) => {
  if (!id || !body) return;
  

  try {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const EditExperieces = async (userId, body, expId) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteExperieces = async (userId, expId) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
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

export const AddPhotoExp = async(userId,expId,body)=>{

  try{

    const url =`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/:${expId}/picture`
    const response = await (url,{
      Method:"Post",
      body,
      headers:{
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
   
}

})


return response

}catch(error){
console.log(error)
}
    
}

