import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  // NavDropdown,
} from "react-bootstrap";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBriefcase,
  faUserFriends,
  faCommentDots,
  faBell,
  // faTh,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../Assets/LI-In-Bug.png";
import user from "../Assets/97.jpg";
import {withRouter, Link} from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar variant="white" className="NavLink py-0" expand="lg">
          <Container className="py-0 navCtrPx">
            <div className="cont">
              <Navbar.Brand className="mr-1" href="#home">
                <img
                  src={logo}
                  style={{ whith: "34px", height: "34px" }}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Form inline>
                <Button className="fix-xl-rounded-right pr-2 searchColorIcon pl-2 ">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em" }}
                    icon={faSearch}
                  />
                </Button>
                <FormControl
                  className="fix-rounded-left searchColor d-none d-sm-inline-block"
                  size="sm"
                  type="text"
                  placeholder="Search"
                />
              </Form>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="pb-2 pt-1 py-xl-0"
            >
              <Nav className="ml-auto">
                <Nav.Link className="flex flex-column" href="#home">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="d-none d-xl-block"
                  />
                  <Link to="/newsfeed/" className="navRouterLink">
                    <span className="py-1 pt-md-0">Home</span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="flex flex-column" href="#web">
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="d-none d-xl-block"
                  />
                  <span className="py-1 pt-md-0">Web</span>
                </Nav.Link>
                <Nav.Link className="flex flex-column" href="#work">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="d-none d-xl-block"
                  />
                  <span className="py-1 pt-md-0">Work</span>
                </Nav.Link>
                <Nav.Link className="flex flex-column" href="#messages">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="d-none d-xl-block"
                  />
                  <span className="py-1 pt-md-0">Messages</span>
                </Nav.Link>


           
            <Nav className="ml-auto">
              <Nav.Link className="flex flex-column" href="">
                <FontAwesomeIcon icon={faHome} />
                <Link to="/newsfeed">
                  <span>Home</span>
              </Link>
              </Nav.Link>
              <Nav.Link className="flex flex-column" href="#web">
                <FontAwesomeIcon icon={faUserFriends} />
                <span>Web</span>
              </Nav.Link>
              <Nav.Link className="flex flex-column" href="#work">
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Work</span>
              </Nav.Link>
              <Nav.Link className="flex flex-column" href="#messages">
                <FontAwesomeIcon icon={faCommentDots} />
                <span>Messages</span>
              </Nav.Link>
                <Nav.Link className="flex flex-column" href="#notifications">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="d-none d-xl-block"
                  />
                  <span className="py-1 pt-md-0">Notifications</span>
                </Nav.Link>


                <div className="flex flex-column">
                  <Nav.Link href="#" className="nav-link">
                    <img
                      src={user}
                      alt=""
                      className="userNavImg d-none d-xl-block"
                    />
                    <Link to="/" className="navRouterLink">
                      <span className="py-1 pt-md-0">
                        Me{" "}
                        <RiArrowDownSFill
                          className="m-0 p-0 d-inline-block"
                          style={{ fontSize: "17px" }}
                        />
                      </span>
                    </Link>
                  </Nav.Link>
                </div>
              </Nav>
              <Nav className="second-nav">
                <Nav.Link href="#" className="nav-link">

                  <img src={user} alt="" className="userNavImg" />
                  <Link to="/profile/me">
                    <span>
                      Me{" "}
                      <RiArrowDownSFill
                        className="m-0 p-0 d-inline-block"
                        style={{ fontSize: "17px" }}
                      />
                    </span>
                  </Link>

                  <CgMenuGridR className="d-none d-xl-block" />
                  <span className="py-1 pt-md-0">
                    Product{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0 d-inline-block "
                      style={{ fontSize: "17px" }}
                    />
                  </span>

                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="nav-link"
                  style={{ maxWidth: "70px", textDecoration: "underline" }}
                >
                  <span className="py-1 py-md-0" style={{ color: "#5D3B09" }}>
                    Reactivate premium
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
