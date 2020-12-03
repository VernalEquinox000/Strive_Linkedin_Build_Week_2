import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FaShare, FaComment, FaThumbsUp } from "react-icons/fa";

import EditPostModal from "./EditPostModal";
class MySinglePost extends React.Component {
  state = {
    name: this.props.obj,

    showModal: false,
  };

  render() {
    return (
      <Col xs={12}>
        <Card>
          <Card.Body>
            <div className="row">
              <div
                className="col-8"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img
                  className="mr-3"
                  style={{ width: "40px", height: "40px" }}
                  src=""
                />

                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {this.state.name.user.name} {this.state.name.user.surname}
                </p>
              </div>
              <div className="col-4 text-right" style={{ fontWeight: "700" }}>
                {" "}
                <Button onClick={() => this.setState({ showModal: true })}>
                  ...
                </Button>
                <EditPostModal
                  fetchData={this.props.fetchData}
                  object={this.state.postInfo}
                  show={this.state.showModal}
                  onHide={() => this.setState({ showModal: false })}
                  postInfo={this.props.obj}
                />
              </div>
            </div>
          </Card.Body>

          <Card.Footer>
            <p
              style={{
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              {this.props.obj.text}
            </p>
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
            }}
          >
            <Button
              className="btn-upload"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FaThumbsUp className="mr-2 ml-2" />
              Like
            </Button>
            <Button className="btn-upload ">
              <FaComment className="mr-2" />
              Comment
            </Button>
            <Button className="btn-upload ">
              <FaShare className="mr-2" />
              Share
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default MySinglePost;
