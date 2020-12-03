import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import SingleExperience from "./SingleExperience";
import AddModal from "./AddModal";

import { getAllExperieces } from "../Api/experiences";
export default class ExperienceSection extends Component {
  state = {
    data: this.props.object,
    editShow: false,
    myexperiences: null,
  };

  componentDidMount = async () => {
    const exp = await getAllExperieces(this.state.data._id);
    this.setState({ myexperiences: exp });
  };

  render() {
    return (
      <div>
        <AddModal
          object={this.state.data}
          show={this.state.editShow}
          onHide={() => this.setState({ editShow: false })}
        />
        <Container className="mt-3 px-0">
          <ListGroup>
            <ListGroup.Item bg="white">
              <div className="d-flex justify-content-between mb-4">
                <h3 className="d-inline-block">Experience</h3>{" "}
                <Button
                  className="expBtn"
                  onClick={() => this.setState({ editShow: true })}
                >
                  <AiOutlinePlus
                    className=" d-inline-block"
                    style={{ fontSize: "20px", color: "blue" }}
                  />
                </Button>
              </div>

              {this.state.myexperiences != null
                ? this.state.myexperiences.map((exp, i) => {
                    return (
                      <SingleExperience
                        key={i}
                        exp={exp}
                        userId={this.state.data}
                      />
                    );
                  })
                : null}
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
