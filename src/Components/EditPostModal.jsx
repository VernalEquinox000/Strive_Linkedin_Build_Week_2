import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlineCloudSync } from "react-icons/ai";
import { EditPost, DeletePost } from "../Api/post";
import { FaCamera } from "react-icons/fa";
export default class EditPostModal extends Component {
  state = {
    details: {
      text: this.props.postInfo.text,
    },
    fileSelected: null,
  };
  updateData = async () => {
    const response = await await EditPost(
      this.props.postInfo._id,
      this.state.details
    );
    if (response.ok) {
      if (!this.state.fileSelected) {
        this.props.onHide();
        this.props.fetchData();
      } else {
        this.submitImg(this.props.postInfo._id);
      }
    }
  };

  deleteData = () => {
    DeletePost(this.props.postInfo._id);
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
        this.props.onHide();
        this.props.fetchData();
      }
      //return response;
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={this.state.details.text}
              placeholder="Enter email"
              onChange={(e) =>
                this.setState({ details: { text: e.target.value } })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
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

          <Button variant="primary" onClick={() => this.updateData()}>
            Edit
          </Button>
          <Button variant="secondary" onClick={() => this.deleteData()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
