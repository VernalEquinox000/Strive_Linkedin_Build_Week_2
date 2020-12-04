import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FaShare, FaComment, FaThumbsUp, FaPaperPlane } from "react-icons/fa";

import EditPostModal from "./EditPostModal";
class MySinglePost extends React.Component {
  state = {
    name: this.props.obj,

    showModal: false,
  };

  render() {
    return (
      <Col xs={12}>
        <Card style={{ margin: "5px 0", borderRadius: "10px" }}>
          <Card.Body style={{ padding: "6px" }}>
            <div className="row">
              <div
                className="col-8"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img
                  className="mr-2"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "1px solid #fff",
                  }}
                  src={this.state.name.user.image}
                />
                <a href="">
                  <p
                    style={{
                      color: "#30302e",
                      fontSize: "16px",
                      fontWeight: "700",
                      marginTop: "11px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {this.state.name.user.name} {this.state.name.user.surname}
                  </p>
                </a>
              </div>

              <div className="col-4 text-right" style={{ fontWeight: "700" }}>
                {" "}
                {this.props.authUser &&
                  this.props.authUser._id === this.state.name.user._id && (
                    <Button
                      style={{
                        color: "black",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        padding: "2px",
                      }}
                      onClick={() => this.setState({ showModal: true })}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          color: "black",
                          padding: "5px",
                          margin: "0",
                        }}
                      >
                        ...
                      </p>
                    </Button>
                  )}
                <EditPostModal
                  fetchData={this.props.fetchData}
                  object={this.state.postInfo}
                  show={this.state.showModal}
                  onHide={() => this.setState({ showModal: false })}
                  postInfo={this.props.obj}
                />
              </div>
            </div>
            <hr style={{ margin: "10px 0" }} />

            <p
              style={{
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
                marginBottom: "5px",
                marginLeft: "4px",
              }}
            >
              {this.props.obj.text}
            </p>
          </Card.Body>
          <Card.Footer>
            <img style={{ width: "100%" }} src={this.props.obj.image}></img>
          </Card.Footer>
          <Card.Body
            style={{
              borderBottom: "2px solid #F7F7F7",
              padding: "5px",
              paddingLeft: "20px",
            }}
          >
            <small>7 comments</small>
          </Card.Body>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <Button
              className="btn-upload"
              style={{
                color: "#616160",
                backgroundColor: "transparent",
                borderColor: "transparent",
                padding: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <FaThumbsUp className="mr-2 ml-2" />
              Like
            </Button>
            <Button
              className="btn-upload "
              style={{
                color: "#616160",
                backgroundColor: "transparent",
                borderColor: "transparent",
                padding: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "10px",
                marginLeft: "5px",
              }}
            >
              <FaComment className="mr-2" />
              Comment
            </Button>
            <Button
              className="btn-upload "
              style={{
                color: "#616160",
                backgroundColor: "transparent",
                borderColor: "transparent",
                padding: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "10px",
                marginLeft: "2px",
              }}
            >
              <FaShare className="mr-2" />
              Share
            </Button>
            <Button
              className="btn-upload "
              style={{
                color: "#616160",
                backgroundColor: "transparent",
                borderColor: "transparent",
                padding: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "10px",
                marginLeft: "2px",
              }}
            >
              <FaPaperPlane className="mr-2" />
              Send
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default MySinglePost;
