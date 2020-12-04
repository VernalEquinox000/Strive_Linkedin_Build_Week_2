import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AddPost, getAllPosts } from "../Api/post";
import { Link } from "@material-ui/core";
import {
  FaCamera,
  FaPhotoVideo,
  FaPaperPlane,
  FaShare,
  FaComment,
  FaThumbsUp,
  FaInfo,
  FaPodcast,
  FaSquare,
  FaBookmark,
  FaNetworkWired,
} from "react-icons/fa";
export default class AddPostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {
        text: "",
      },
      fileSelected: null,
    };
    this.fileRef = React.createRef();
  }
  handleChange = (e) => {
    this.setState({
      body: {
        text: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(AddPost);
    const response = await AddPost(this.state.body);
    this.submitImg(response._id);
    this.props.fetchData();
  };
  fileSelectedHandler = (e) => {
    const data = new FormData();
    data.append("post", e.target.files[0]);
    this.setState({ fileSelected: data });
  };
  submitImg = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "POST",
          body: this.state.fileSelected,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.ok) {
        alert("uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="col-12">
        <Card>
          <Card.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <textarea
              style={{ flex: "0.8", border: "none" }}
              placeholder="Start a post"
              // onKeyDown={this.handleChange}
              onChange={this.handleChange}
              type="text"
              name="text"
              id="text"
              required
            ></textarea>

            <div>
              <button
                style={{ background: "transparent" }}
                className="btn-upload"
              >
                <div class="image-upload" style={{ cursor: "pointer" }}>
                  <label for="file-input">
                    <Link>
                      <input
                        type="file"
                        id="file"
                        ref={(inputRef) => (this.fileRef = inputRef)}
                        onChange={this.fileSelectedHandler}
                        style={{ display: "none" }}
                      />
                      <FaCamera
                        style={{ width: "20px" }}
                        onClick={() => this.fileRef.click()}
                      />
                    </Link>
                  </label>
                </div>
              </button>
              <button
                style={{ background: "transparent" }}
                className="btn-upload ml-5 left-border"
              >
                <FaPhotoVideo />
              </button>
              <button
                style={{ background: "transparent" }}
                className="btn-upload ml-5 left-border"
                onClick={this.handleSubmit}
              >
                <FaPaperPlane />
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
{
  /* <input
name="image"
type="file"
id="expImage"
accept="image/*"
ref={(fileInput) => (this.fileRef = fileInput)}
onChange={this.onFileChange}
hidden
/>
</Form>
<div className="button-modal-wrapper">
<Button id="upload-btn" onClick={() => this.fileRef.click()}>
Upload
</Button>
<Button id="link-btn">Link</Button> */
}
