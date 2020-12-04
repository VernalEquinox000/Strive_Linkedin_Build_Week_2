import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "@material-ui/core";
import {AddExperiece,AddPhotoExp} from '../Api/experiences';
import { FaCamera,FaPhotoVideo,FaPaperPlane } from "react-icons/fa";
export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: null,
      
     
      fileSelected: null,
    };
    this.fileRef = React.createRef();
  }


  handleChange = (e) => {
    this.setState({
      body: {
        ...this.state.body,
        [e.target.id]: e.target.value,
      },
    });
  };
   handleSubmit = async (e) => {
    e.preventDefault();
    const id = this.props.object._id;
    const body = this.state.body;
    
    const response = await AddExperiece({ id, body });
    const myidexp= await response.json()
    
    this.submitImg(id,myidexp._id);
    console.log(myidexp)
    
  };
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = this.props.object._id;
  //   const body = this.state.body;
  //   await AddExperiece({ id, body });
  // };
  fileSelectedHandler = (e) => {
    const data = new FormData();
    data.append("experience", e.target.files[0]);
    this.setState({ fileSelected: data });
  };
  submitImg = async (userId,expId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
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
      <>


        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add
              <Container>
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Row>
                          <Col>

                            <Form.Label>Role</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Role"
                              required
                              id="role"

                           

                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Col>
                          <Col>

                            <Form.Label>company</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="company"
                              required
                              id="company"

                            

                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>

                            <Form.Label>startDate</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="startDate"
                              required
                              id="startDate"
                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />

                           
                          

                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>

                            <Form.Label>description</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="description"
                              required
                              id="description"

                            

                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                    
                      <Form.Group>
                        <Form.Label>area</Form.Label>
                        <Form.Control
                          placeholder="area"
                          type="text"
                          required
                          id="area"

                          onKeyDown={this.handleChange}
                          onChange={this.handleChange}
                        />
                       
                      </Form.Group>
              
              

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
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
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
