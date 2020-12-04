import React from "react";
import { UploadMyPhoto } from "../Api/postimg";
import { Button } from "react-bootstrap";
class UploadPhoto extends React.Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file });
  }
  handleUpload(e) {
    let file = this.state.file;

    let formData = new FormData();

    formData.append("profile", file);
    formData.append("name", "Enis");
    console.log(this.props.somedata._id);

    UploadMyPhoto(this.props.somedata._id, formData);
  }

  render() {
    return (
      <div>
        <form>
          <div className="">
            <label className="ml-2">Select File</label>
            <input type="file" name="file" onChange={e => this.handleFile(e)} />
          </div>
          <Button
            type="button"
            className="upButton"
            onClick={e => this.handleUpload(e)}
          >
            Upload
          </Button>
        </form>
      </div>
    );
  }
}

export default UploadPhoto;
