import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";

export default class AddModal extends Component {
  state={
    data:this.props.object
  }
  handleSubmit = async () => {
      

    try {
      const url = `https://striveschool-api.herokuapp.com/api/profile/${this.state.data._id}/experiences`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.data),
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const expData = await response.json();

      console.log(expData);
    
    } catch (err) {
      console.log(err);
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
              Edit
              <Container>
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Row>
                          <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First name"
                              required
                              id="firstName"
                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Col>
                          <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Last name"
                              required
                              id="lastName"
                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="username"
                              required
                              id="username"
                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="title"
                              required
                              id="title"
                              onKeyDown={this.handleChange}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          required
                          id="email"
                          onKeyDown={this.handleChange}
                          onChange={this.handleChange}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Created</Form.Label>
                        <Form.Control
                          placeholder="1234 Main St"
                          type="text"
                          required
                          id="dob"
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
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
