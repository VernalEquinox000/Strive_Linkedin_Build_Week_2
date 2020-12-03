export const UploadMyPhoto = async(userId,body)=>{

    try{
        const url = "https://striveschool-api.herokuapp.com/api/profile/${userId}/picture"

        let response = await fetch(url,{
            method:"POST",
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