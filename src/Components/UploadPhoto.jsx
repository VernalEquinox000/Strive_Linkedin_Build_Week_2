import React from 'react'
import {UploadMyPhoto} from '../Api/postimg'
class UploadPhoto extends React.Component {

    state = {

        file:null,

    }

    handleFile(e){

        let file = e.target.files[0]

        this.setState({file})
    }
    handleUpload(e){
       let file = this.state.file

       let formData = new FormData()

       formData.append('profile',file)
       formData.append('name',"Enis")
       console.log(this.props.somedata._id)

       UploadMyPhoto(this.props.somedata._id,formData)

    }


    render() {
        return (
            <div>
                <form>

                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />

                    </div>
                    <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
                </form>

            </div>)
    }


}

export default UploadPhoto