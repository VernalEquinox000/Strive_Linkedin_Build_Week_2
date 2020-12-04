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
        <Navbar variant="white" className="NavLink py-0">
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
                <Button
                  className="fix-rounded-right searchColor pr-0"
                  variant="outline-info"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "1em" }}
                    icon={faSearch}
                  />
                </Button>
                <FormControl
                  className="fix-rounded-left searchColor"
                  size="sm"
                  type="text"
                  placeholder="Search"
                />
              </Form>
            </div>

            <Nav className="ml-auto">
              <Nav.Link className="flex flex-column" href="#home">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
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
                <FontAwesomeIcon icon={faBell} />
                <span>Notifications</span>
              </Nav.Link>

              <div className="flex flex-column">
                <Nav.Link href="#" className="nav-link">
                  <img src={user} alt="" className="userNavImg" />
                  <span>
                    Me{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0 d-inline-block"
                      style={{ fontSize: "17px" }}
                    />
                  </span>
                </Nav.Link>
              </div>
            </Nav>
            <Nav className="second-nav">
              <Nav.Link href="#" className="nav-link">
                <CgMenuGridR />
                <span>
                  Product{" "}
                  <RiArrowDownSFill
                    className="m-0 p-0 d-inline-block"
                    style={{ fontSize: "17px" }}
                  />
                </span>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-link"
                style={{ maxWidth: "70px", textDecoration: "underline" }}
              >
                <span style={{ color: "#5D3B09" }}>Reactivate premium</span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
