import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import SingleExperience from "./SingleExperience";
export default class ExperienceSection extends Component {
  render() {
    return (
      <div>
        <Container className="mt-3">
          <ListGroup>
            <ListGroup.Item bg="white">
              <div className="d-flex justify-content-between mb-4">
                <h3 className="d-inline-block">Experience</h3>{" "}
                <Button className="expBtn">
                  <AiOutlinePlus
                    className=" d-inline-block"
                    style={{ fontSize: "20px", color: "blue" }}
                  />
                </Button>
              </div>

              <SingleExperience />
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
