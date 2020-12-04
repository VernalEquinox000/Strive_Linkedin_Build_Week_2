import React from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import UploadPhoto from "./UploadPhoto";
class EditModalProfile extends React.Component {
  state = {
    info: this.props.obj,
    modalShow: true,
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.obj !== this.props.obj) {
      this.setState({ info: this.props.obj });
    }
  };
  handleChange = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.id]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(this.state.info),

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      if (response.ok) {
        this.props.fetchProfile();
        this.props.onHide();
      }
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
                            <UploadPhoto somedata={this.state.info.image} />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First name"
                              required
                              id="firstName"
                              value={this.state.info.name}
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
                              value={this.state.info.surname}
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
                              value={this.state.info.username}
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
                              value={this.state.info.title}
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
                          value={this.state.info.email}
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
                          value={this.state.info.createdAt}
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

export default EditModalProfile;
