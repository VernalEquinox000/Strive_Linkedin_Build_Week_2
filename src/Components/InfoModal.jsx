import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";


export default function InfoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reviews
          <Container>
            <Row>
              <Col sm={6}>
                <img
                  src={props.image}
                  alt={props.movie}
                  style={{ height: "20rem", width: "12rem" }}
                ></img>
              </Col>
              <Col sm={6}>
              <p>
                    <strong>Name:</strong> {props.name}
                </p>
                <p>
                    <strong>Surname:</strong> {props.surname}
                </p>
                <p>
                  <strong>Username: </strong> {props.username}
                </p>
                <p>
                  <strong> Created: </strong> {props.createdAt}
                </p>
                <p>
                  <strong>Uptaded: </strong> {props.updatedAt}
                </p>

              </Col>
            </Row>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}