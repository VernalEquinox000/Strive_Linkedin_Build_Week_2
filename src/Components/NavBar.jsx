import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBriefcase,
  faUserFriends,
  faCommentDots,
  faBell,
  faTh,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../Assets/LI-In-Bug.png";
import user from "../Assets/97.jpg";

class NavBar extends Component {
  render() {
    return (
      <>
        <Container>
          <Navbar variant="white" className="NavLink">
            <div className="cont">
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  style={{ whith: "1.8em", height: "1.8em" }}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Form inline>
                <FormControl type="text" placeholder="" className="mr-sm-2" />
                <Button variant="outline-info">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
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
                <img src={user} alt="" className="userNavImg" />
                <NavDropdown title="you" id="collasible-nav-dropdown userDrop">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              <div className="flex flex-column">
                <FontAwesomeIcon icon={faTh} />
                <NavDropdown title="Product" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default NavBar;
