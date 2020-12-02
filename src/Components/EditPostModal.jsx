import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { EditPost, getAllPosts } from "../Api/post";
export default class EditPostModal extends Component {
  state = {
    details: {
      text: this.props.postInfo.text,
    },
  };
  updateData = () => {
    EditPost(this.props.postInfo._id, this.state.details);
    this.props.onHide();
    this.props.fetchData();
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
          <Button variant="primary" onClick={() => this.updateData()}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
