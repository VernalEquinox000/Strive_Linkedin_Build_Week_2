import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import vid1 from "../Assets/vid1.png";
import vid2 from "../Assets/vid2.png";
import vid3 from "../Assets/vid3.png";
import workingnibba from "../Assets/workingnibba.jpg";

import SmallAside from "./SmallAside";

class Aside extends React.Component {
  state = {
    profiles: [],
  };

  fetchProfile = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      });
      const data = await response.json();
      this.setState({ profiles: data.slice(0, 4) });
      console.log(this.state.profiles)
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount () {
    this.fetchProfile();
    
    
  }

  render() {
    console.log(this.state.profiles);

    return (
      <>
        <div>
          <img
            className="ad"
            src={workingnibba}
            alt="Advertise on LinkedIn"
            border={0}
          />
        </div>
        <div className="usersDiv">
          <p className="divTitle">People also viewed</p>
          {this.state.profiles.map((profile,i) => {
           return <SmallAside obj={profile} key={i}/>
          })}
        </div>
        <div className="lrn-div">
          <svg
            style={{ color: "#0A66C2" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            data-supported-dps="14x14"
            fill="currentColor"
            class="mercado-match"
            width="14"
            height="14"
            focusable="false"
          >
            <g>
              <path
                class="background-mercado"
                d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
              ></path>
            </g>
          </svg>
          <h6 className="lrn-h6">LEARNING</h6>
          <h5 className="lrn-h5">Add new skills with these courses</h5>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="vid-img" src={vid1}></img>
            </div>
            <div className="col-md-8">
              <h4 className="vid-txt">
                Building Angular and ASP.NET Core Applications
              </h4>
              <small className="vid-sml">3,895</small>
            </div>
            <div className="col-md-4">
              <img className="vid-img" src={vid2}></img>
            </div>
            <div className="col-md-8">
              <h4 className="vid-txt">
                Building Angular and ASP.NET Core Applications
              </h4>
              <small className="vid-sml">4,985</small>
            </div>
            <div className="col-md-4">
              <img className="vid-img" src={vid3}></img>
            </div>
            <div className="col-md-8">
              <h4 className="vid-txt">
                Building Angular and ASP.NET Core Applications
              </h4>
              <small className="vid-sml">12,464</small>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Aside;
