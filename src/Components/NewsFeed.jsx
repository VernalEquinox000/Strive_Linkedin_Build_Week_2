import React, { Component } from "react";
import { getAllPosts } from "../Api/post";
import MySinglePost from "./MySinglePost";
import AddPostModal from "./AddPostModal";
import AddPostCard from "./AddPostCard";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Modal,
  Button,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaHashtag, FaBookmark, FaHeart } from "react-icons/fa";
import services from "../Api/auth";
class NewsFeed extends Component {
  state = {
    mypost: [],
    post: [],
    postId: null,
    newPost: [],
    person: [],
    modalShow: false,
    image: "",
    showModal: false,
    users: [],
    user: {},
    authUser: {},
    oldPostText: "",
  };

  fetchData = async () => {
    const exp = await getAllPosts();
    console.log("array", exp);
    console.log(this.state.newsFeed);
    console.log(this.state.mypost);
    this.setState({ mypost: exp.slice(0, 20) });
  };
  componentDidMount = async () => {
    this.fetchData();
    this.fetchAuth();
  };
  fetchAuth = () => {
    services.fetchProfile((data) => {
      this.setState({ authUser: data });
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row mt-1">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <Card
                  className="left-side-newsfeed"
                  style={{ borderRadius: "10px" }}
                >
                  <Card.Body className="banner-profile">
                    {/* {this.state.user &&
                      this.state.users.slice(0, 1).map((user, i) => {
                        return ( */}
                    <Col>
                      {/* {user.image === undefined || user.image === "" ? ( */}
                      {/* <img
                                className="placeholder-img"
                                src="https://cdn5.vectorstock.com/i/thumb-large/95/64/default-placeholder-businesswoman-half-length-por-vector-20889564.jpg"
                                className="card-img img-fluid"
                                alt="image"
                              />
                            ) : ( */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "45px",
                        }}
                      >
                        <img
                          className="profile-img mb-2 "
                          src={this.state.authUser.image}
                        />

                        <div
                          style={{
                            lineHeight: "0.9",
                            margin: "0 auto",
                          }}
                        >
                          <h6 style={{ fontWeight: "500", width: "100%" }}>
                            {this.state.authUser.name}
                            {this.state.authUser.surname}
                          </h6>
                          <small style={{ fontWeight: "300" }}>
                            {this.state.authUser.title}
                          </small>
                        </div>
                        <hr />
                      </div>
                    </Col>
                  </Card.Body>

                  <ListGroup
                    className="list-group-flush"
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      paddingTop: "100px",
                      borderTop: "1px solid #66666",
                    }}
                  >
                    <ListGroupItem>
                      <p
                        className="pt-2"
                        style={{
                          color: "#666666",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        Connections
                        <small
                          style={{
                            fontWeight: "700",
                            fontSize: "13px",
                            color: "#0073B1",
                          }}
                        >
                          90
                        </small>
                      </p>
                      <p className="pb-2">Grow your network</p>
                      <p
                        style={{
                          color: "#666666",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        Who viewed your profile
                        <small
                          style={{
                            fontWeight: "700",
                            fontSize: "13px",
                            color: "#0073B1",
                          }}
                        >
                          47
                        </small>
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>See all Premium features</ListGroupItem>
                    <ListGroupItem>
                      <FaBookmark className="mr-2" />
                      Saved items
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
              <div className="col-12 mt-2">
                <Card style={{ fontSize: "12px" }}>
                  <Card.Body>
                    <p style={{ fontWeight: "700", color: "#0073B1" }}>
                      Groups
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: "700",
                        color: "#0073B1",
                      }}
                    >
                      Events{" "}
                      <small style={{ fontSize: "20px", fontWeight: "500" }}>
                        +
                      </small>
                    </p>
                    <p
                      style={{
                        fontWeight: "700",
                        color: "#0073B1",
                        marginBottom: "4px",
                      }}
                    >
                      Followed Hashtags
                    </p>
                    <ul
                      className="list-unstyled"
                      style={{ color: "#666666", fontWeight: "700" }}
                    >
                      <li>
                        <FaHashtag /> FuckYouGitHub
                      </li>
                      <li>
                        <FaHeart /> LuisSavedOurAss
                      </li>
                      <li>
                        <FaHashtag /> Yeeet
                      </li>
                      <li>
                        <FaHeart /> Team QueenTetiana
                      </li>
                      <li>
                        <FaHashtag /> SexyBeast
                      </li>
                      <li>
                        <FaHeart /> BRRRRRRR
                      </li>
                    </ul>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      style={{ textAlign: "center", fontWeight: "700" }}
                    >
                      Discover more
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 marg-top">
            <div className="row">
              <AddPostCard fetchData={this.fetchData} />
            </div>

            <Row>
              {this.state.mypost.map((exp, i) => {
                return (
                  <MySinglePost
                    obj={exp}
                    key={exp._id}
                    fetchData={this.fetchData}
                    authUser={this.state.authUser}
                  />
                );
              })}
            </Row>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 btn-trans">
            {/* <Row>
              {this.state.mypost.map((exp, i) => {
                <MySinglePost obj={exp} key={i} />;
              })}
            </Row> */}
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 top-marg">
                <Card style={{ borderRadius: "10px" }}>
                  <Card.Body>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Add to you feed <AiOutlineQuestionCircle />
                    </p>
                    <div className="row">
                      <div
                        className="col-6"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                        }}
                      >
                        <img
                          style={{ width: "40px" }}
                          src="https://www.corsinvest.it/wp-content/uploads/2019/10/github-logo.png"
                        />
                        <h6 className="ml-3 mt-2" style={{ fontSize: "15px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div
                        className="col-6 mt-2"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "4px",
                            color: "rgb(0, 115, 177)",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div
                        className="col-6"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                        }}
                      >
                        <img
                          style={{ width: "40px" }}
                          src="https://www.corsinvest.it/wp-content/uploads/2019/10/github-logo.png"
                        />
                        <h6 className="ml-3 mt-2" style={{ fontSize: "15px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div
                        className="col-6 mt-2"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "4px",
                            color: "rgb(0, 115, 177)",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div
                        className="col-6"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                        }}
                      >
                        <img
                          style={{ width: "40px" }}
                          src="https://www.corsinvest.it/wp-content/uploads/2019/10/github-logo.png"
                        />
                        <h6 className="ml-3 mt-2" style={{ fontSize: "15px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div
                        className="col-6 mt-2"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "4px",
                            color: "rgb(0, 115, 177)",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 pt-3">
                        {" "}
                        <small
                          style={{
                            color: "rgb(0, 115, 177)",
                            fontWeight: "700",
                          }}
                        >
                          View all recommandations
                        </small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
