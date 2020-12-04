import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Background from "../Assets/linkedin_bg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Aside from "./Aside";
import EditModalProfile from "./EditModalProfile";
import ExperienceSection from "./ExperienceSection";

import services from "../Api/auth";

export default class Header extends Component {
  state = {
    profile: {},
    editShow: false,
  };

  fetchProfile = async () => {
    services.fetchProfile((data) => {
      this.setState({ profile: data });

      console.log(this.state.profile);

      console.log(this.state.profile.username);
    });
  };

  componentDidMount() {
    this.fetchProfile();
  }

  render() {
    const { profile } = this.state;

    const { name, surname, title, area, bio, image } = profile;

    return (
      <div>
        {this.state.profile && (
          <Container>
            <Row>
              <Col xs={8}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={Background}
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                  <Card.Body className="position-relative">
                    <img
                      src={image}
                      className="position-absolute"
                      style={{
                        top: "-75px",
                        width: "150px",
                        borderRadius: "100px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "30px",
                        fontWeight: "bolder",
                        paddingTop: "100px",
                      }}
                    >
                      {`${name} ${surname}`}{" "}
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => this.setState({ editShow: true })}
                      />
                    </Card.Text>
                    <Card.Text>{title}</Card.Text>
                    <Card.Text style={{ color: "grey" }}>
                      {area}
                      {"        "}
                      <a href="#" style={{ fontWeight: "bolder" }}>
                        129 links
                      </a>
                      {"  |  "} Strive School
                    </Card.Text>
                    <Button variant="primary">Connect</Button>{" "}
                  </Card.Body>
                </Card>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "30px", fontWeight: "bolder" }}
                    >
                      About
                    </Card.Text>

                    <Card.Text>{`${bio}`}</Card.Text>
                  </Card.Body>
                </Card>

                {this.state.profile._id ? (
                  //<ExperienceSection object={this.state.profile} />
                  <ExperienceSection object={this.state.profile} id={this.props.match.params._id} />
                ) : null}
              </Col>
              <Col xs={4}>
                <Aside />
              </Col>
            </Row>
            <EditModalProfile
              obj={this.state.profile}
              show={this.state.editShow}
              onHide={() => this.setState({ editShow: false })}
              fetchProfile={this.fetchProfile}
            />
          </Container>
        )}{" "}
      </div>
    );
  }
}
