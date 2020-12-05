import React from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { EditExperieces } from "../Api/experiences";

class EditExpModal extends React.Component {
  state = {
    data: this.props.object,
    userId: this.props.userid,
  };
  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    EditExperieces(this.state.userId, this.state.data, this.state.data._id);
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
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                              value={this.state.data.role}
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
                              value={this.state.data.company}
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
                              value={this.state.data.startDate}
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
                              value={this.state.data.description}
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
                          value={this.state.data.area}
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
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default EditExpModal;
