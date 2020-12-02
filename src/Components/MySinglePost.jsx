import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FaShare, FaComment, FaThumbsUp } from "react-icons/fa";
class MySinglePost extends React.Component {
  state = {
    postInfo: this.props.obj.text,
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
                  src="https://media-exp1.licdn.com/dms/image/C560BAQG_9XYxosKCoA/company-logo_100_100/0?e=1600300800&v=beta&t=T65Ow--w87wk6t7oEmqRaEJw9mnWSttAdLUXk8kRl0c"
                />

                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  Swiss Re
                  <small>299,348 followers</small>
                  <small>Promoted</small>
                </p>
              </div>
              <div className="col-4 text-right" style={{ fontWeight: "700" }}>
                {" "}
                <Button onClick={() => this.setState({ showModal: true })}>
                  ...
                </Button>
              </div>
            </div>
          </Card.Body>
          <img
            style={{ height: "300px", marginTop: "-20px" }}
            src="https://media-exp1.licdn.com/dms/image/sync/C4E18AQHUHo2BCdE25g/companyUpdate-article-image-shrink_627_1200/0?e=1595462400&v=beta&t=QiFtShVXzqzzYdtvWXAGcxvyPByYbBHs9xT1C152c0A"
          />
          <Card.Footer>
            <p
              style={{
                fontWeight: "700",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
              }}
            >
              Climate change adaptation: What we can learn from the Dutch
              masters | Swiss Re
              <Button
                style={{
                  color: "#0073B1",
                  background: "none",
                  border: "1px solid #0073B1",
                  fontSize: "15px",
                  fontWeight: "700",
                  borderRadius: "3px",
                }}
              >
                Learn more
              </Button>
            </p>
            <small>swissre.com</small>
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
