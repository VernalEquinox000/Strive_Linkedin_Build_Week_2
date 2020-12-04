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
      <div className="col-12" style={{ flexDirection: "column" }}>
        <Card>
          <Card.Body style={{ paddingBottom: "0" }}>
            <textarea
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "35px",
              }}
              placeholder="Start a post"
              // onKeyDown={this.handleChange}
              onChange={this.handleChange}
              type="text"
              name="text"
              id="text"
              required
            ></textarea>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "10px 5px",
              }}
            >
              <button
                style={{
                  color: "#616160",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  padding: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "10px",
                  marginLeft: "2px",
                }}
                className="btn-upload"
                onClick={() => this.fileRef.click()}
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
                        size="22"
                        style={{
                          color: "#616160",
                          width: "30px",
                          marginRight: "5px",
                          marginTop: "2px",
                        }}
                      />
                    </Link>
                  </label>
                </div>
                Photo
              </button>

              <button
                style={{
                  color: "#616160",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  padding: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "10px",
                  marginLeft: "2px",
                }}
                className="btn-upload ml-2 left-border"
                onClick={this.handleSubmit}
              >
                <FaPaperPlane
                  size="20"
                  style={{
                    width: "30px",
                    marginRight: "4px",
                    marginBottom: "2px",
                  }}
                />
                Send
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
