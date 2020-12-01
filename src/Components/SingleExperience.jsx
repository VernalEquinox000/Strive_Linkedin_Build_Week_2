import React, { Component } from "react";
import { BsPencil } from "react-icons/bs";
import { Col, Row, Button } from "react-bootstrap";
export default class SingleExperience extends Component {
  render() {
    return (
      <div className="listItem">
        <Row>
          <Col className="pr-0">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQG6wKVXF9sMfg/company-logo_100_100/0?e=1614816000&v=beta&t=4B6v3D5AWcZN_TIL-mhM6tAkst2721kRR00SNwqy7Ys"
              alt=""
              style={{ width: "56px", height: "56px" }}
            />
          </Col>
          <Col
            className="pl-0 expDescription pb-3 d-flex justify-content-between"
            xl="11"
          >
            <div>
              <h6>sexy beast management</h6>
              <span>Sexy Beast L.A.</span>
              <span>12 anni 7 mesi</span>
              <br />
              <span>Los Angeles</span>
            </div>
            <Button className=" expBtn" onClick={this.props.onClick}>
              <BsPencil
                className=" d-inline-block"
                style={{ fontSize: "20px", color: "blue" }}
              />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
