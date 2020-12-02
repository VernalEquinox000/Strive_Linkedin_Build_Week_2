import React, { Component } from "react";
import {AddPost,getAllPosts} from"../Api/post";
import MySinglePost from "./MySinglePost";
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
import {
  FaHashtag,
  FaCamera,
  FaPhotoVideo,
  FaPaperPlane,
  FaShare,
  FaComment,
  FaThumbsUp,
  FaInfo,
  FaPodcast,
  FaSquare,
  FaBookmark,
  FaNetworkWired,
} from "react-icons/fa";

class NewsFeed extends Component {
  state = {
    mypost:[],
    post: [],
    postId: null,
    newPost: [],
    person: [],
    body: null,
    image: "",
    showModal: false,
    users: [],
    user: "",
    oldPostText: "",
    sendStatus: {
      text: "",
      image: null,
    },
  };

  handleChange = (e) => {
    this.setState({
      body: {
        ...this.state.body,
        [e.target.id]: e.target.value,
      },
    });
  };
    handleSubmit = async (e) => {
      e.preventDefault();
      console.log(AddPost)
      AddPost(this.state.body)
  
    }
    componentDidMount = async()=>{
      const exp = await getAllPosts ()
      this.setState({mypost:exp})
      console.log(exp)
     console.log(this.state.newsFeed)
     console.log(this.state.mypost)
  
  }

 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <Card style={{ border: "1px solid #DFDFDF" }}>
                  <Card.Body
                    className="head-prof"
                    style={{ position: "relative", height: "100px" }}
                  >
                    {this.state.user &&
                      this.state.users.slice(0, 1).map((user, i) => {
                        return (
                          <Col key={i}>
                            {user.image === undefined || user.image === "" ? (
                              <img
                                src="https://cdn5.vectorstock.com/i/thumb-large/95/64/default-placeholder-businesswoman-half-length-por-vector-20889564.jpg"
                                style={{
                                  width: "30px",
                                  border: "1px solid lightgray",
                                  borderRadius: "2rem",
                                }}
                                className="card-img img-fluid"
                                alt="image"
                              />
                            ) : (
                              <div
                                className="cent-welc"
                                style={{
                                  position: "absolute",
                                  top: "20px",
                                  left: "35px",
                                }}
                              >
                                <img
                                  className="mb-2"
                                  style={{
                                    width: "80px",
                                    borderRadius: "50%",
                                    border: "3px solid #fff",
                                  }}
                                  src={this.state.user.image}
                                />

                                <div
                                  style={{
                                    lineHeight: "0.9",
                                    margin: "0 auto",
                                  }}
                                >
                                  <h6
                                    style={{ fontWeight: "700", width: "100%" }}
                                  >
                                    Welcome, {this.state.user.name}
                                  </h6>
                                  <small style={{ fontWeight: "500" }}>
                                    {this.state.user.bio}
                                  </small>
                                </div>
                              </div>
                            )}
                          </Col>
                        );
                      })}
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
                    <ListGroupItem style={{ lineHeight: "0.5" }}>
                      <p
                        className="pt-2"
                        style={{
                          lineHeight: "0.1",
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
                    <p style={{ fontWeight: "500" }}>Recent</p>
                    <ul
                      className="list-unstyled"
                      style={{ color: "#666666", fontWeight: "700" }}
                    >
                      <li>
                        <FaNetworkWired /> Premium Career Group
                      </li>
                      <li>
                        <FaHashtag /> programminglife
                      </li>
                      <li>
                        <FaHashtag /> codinglife
                      </li>
                      <li>
                        <FaHashtag /> learntocode
                      </li>
                      <li>
                        <FaNetworkWired /> React learning Gro..
                      </li>
                    </ul>
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
                    <p style={{ fontWeight: "700", color: "#0073B1" }}>
                      Followed Hashtags
                    </p>
                    <ul
                      className="list-unstyled"
                      style={{ color: "#666666", fontWeight: "700" }}
                    >
                      <li>
                        <FaHashtag /> programming life
                      </li>
                      <li>
                        <FaHashtag /> coding life
                      </li>
                      <li>
                        <FaHashtag /> codinglife
                      </li>
                      <li>
                        <FaHashtag /> learntocode
                      </li>
                      <li>See all</li>
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
              <div className="col-12">
                <Card>
                  <Card.Body
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <textarea
                      style={{ flex: "0.8", border: "none" }}
                      placeholder="Start a post"
                      onKeyDown={this.handleChange}
                      onChange={this.handleChange}
                      type="text"
                      name="text"
                      id="text"
                     
                      required
                    ></textarea>
                    <faKey style={{ color: "#000" }} />
                    <div>
                      <button
                        style={{ background: "transparent" }}
                        className="btn-upload"
                      >
                        <div class="image-upload" style={{ cursor: "pointer" }}>
                          <label for="file-input">
                            <FaCamera style={{ width: "20px" }} />
                          </label>

                          <input
                            id="file-input"
                            type="file"
                            onChange={this.fileSelectedHandler}
                            style={{ display: "none" }}
                          />
                        </div>
                      </button>
                      <button
                        style={{ background: "transparent" }}
                        className="btn-upload ml-5 left-border"
                      >
                        <FaPhotoVideo />
                      </button>
                      <button
                        style={{ background: "transparent" }}
                        className="btn-upload ml-5 left-border"
                        onClick={ this.handleSubmit}
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <small
                      style={{
                        color: "rgb(0, 115, 177)",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Write an article
                    </small>{" "}
                    <small>on LinkedIn</small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
            <Row>
            {this.state.mypost.map((exp,i)=>{
              
               <MySinglePost obj={exp} key={i} />
              })} 
            </Row>
            <Row>
              <Col>
                {this.state.post
                  .filter((post) => post.user)
                  .map((user, i) => {
                    console.log(user.image);
                    if (user.user)
                      return (
                        <>
                          <Card body key={i} className="mt-2">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{ fontWeight: "700", fontSize: "14px" }}
                              >
                                <img
                                  src={user.user.image}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    marginRight: "10px",
                                  }}
                                />{" "}
                                {user.user.name}
                              </p>

                              <Dropdown>
                                <Dropdown.Toggle
                                  style={{
                                    background: "none",
                                    color: "#000",
                                    border: "none",
                                  }}
                                ></Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    onClick={() => this.open(user._id)}
                                  >
                                    Edit
                                  </Dropdown.Item>

                                  <Dropdown.Item
                                    href="#/action-2"
                                    onClick={() => this.deleteStatus(user._id)}
                                  >
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <Modal
                                show={this.state.showModal}
                                onHide={() => this.close()}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Edit message</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <textarea
                                    value={this.state.oldPostText}
                                    onChange={this.sendPost}
                                    style={{ width: "100%", border: "none" }}
                                  ></textarea>
                                </Modal.Body>

                                <Modal.Footer>
                                  <Button onClick={this.close}>Save</Button>
                                </Modal.Footer>
                              </Modal>
                            </div>

                            <small style={{ letterSpacing: "3px" }}>
                              <FaPodcast className="mr-3" />
                              {user.text}
                            </small>
                            <br></br>
                            {user.image !== undefined && (
                              <img src={user.image} />
                            )}
                            <div
                              className="mt-4"
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              }}
                            >
                              <button
                                className="btn-upload like-btn"
                                onClick={() => this.addLikes(user._id)}
                                style={{
                                  background: "transparent",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                {this.state.likes}
                                <FaThumbsUp className="mr-2 ml-2" />
                                Like
                              </button>
                              <button
                                className="btn-upload "
                                style={{ background: "transparent" }}
                              >
                                {" "}
                                <FaComment className="mr-2" />
                                Comment
                              </button>
                              <button
                                className="btn-upload "
                                style={{ background: "transparent" }}
                              >
                                <FaShare className="mr-2" />
                                Share
                              </button>
                            </div>
                          </Card>
                          <Card.Footer
                            style={{
                              borderTop: "none",
                              border: "1px solid #DFDFDF",
                              fontSize: "12px",
                            }}
                          >
                            Be the first to comment on this
                          </Card.Footer>
                        </>
                      );
                  })}
              </Col>
            </Row>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 btn-trans">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 top-marg">
                <Card>
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
                        className="col-8"
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
                        <h6 className="ml-1" style={{ fontSize: "12px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div className="col-4">
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "2px",
                            color: "rgb(0, 115, 177)",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div
                        className="col-8"
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
                        <h6 className="ml-1" style={{ fontSize: "12px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div className="col-4">
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "2px",
                            color: "rgb(0, 115, 177)",
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div
                        className="col-8"
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
                        <h6 className="ml-1" style={{ fontSize: "12px" }}>
                          GitHub
                        </h6>
                      </div>
                      <div className="col-4">
                        <button
                          style={{
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "2px",
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
