import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import SingleExperience from "./SingleExperience";
import AddModal from "./AddModal";
export default class ExperienceSection extends Component {
  state = {
    datas: this.props.object,
    editShow: false,
  };

  //   handleSubmit = async () => {
  //     try {
  //       const url = `https://striveschool-api.herokuapp.com/api/profile/${this.state.data._id}/experiences`;
  //       const response = await fetch(url, {
  //         body: JSON.stringify(this.state.data),
  //         headers: {
  //           Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const expData = await response.json();

  //       console.log(expData);
  //       /*this.setState({ profile: data })

  //             console.log(data);

  //             console.log(this.state.profile)

  //             console.log(this.state.profile.username)*/
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   componentDidMount() {
  //     this.fetchProfile();
  //   }

  render() {
    return (
      <div>
        <AddModal
          object={this.state.data}
          show={this.state.editShow}
          onHide={() => this.setState({ editShow: false })}
        />
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

              <SingleExperience
                onClick={() => this.setState({ editShow: true })}
              />
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
