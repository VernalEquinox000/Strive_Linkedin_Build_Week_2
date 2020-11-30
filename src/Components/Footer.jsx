import React from "react";

import { FaLinkedin, FaCog } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="container mt-5">
      <hr />
      <div className="row">
        <div className="col-12">
          <h6 className="footer-linked">
            Linked <FaLinkedin className="footer-icon-linkedin" />
          </h6>
        </div>
      </div>
      <div className="row footer pt-3">
        <div className="col-lg-2 col-md-4 col-sm-12">
          <ul className="footer-elements-links">
            <li>
              <a href="">About</a>
            </li>
            <li>
              {" "}
              <a href="">Community</a>
            </li>
            <li>
              {" "}
              <a href="">Privacy & Terms</a> <faChevronDown />
            </li>
            <li>
              {" "}
              <a href="">Sales Solutions</a>
            </li>
            <li>
              {" "}
              <a href="">Safety Center</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2  col-md-4 col-sm-12">
          <ul className="footer-elements-links">
            <li>
              <a href="">Accessibility</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Ad Choices</a>
            </li>
            <li>
              <a href="">Mobile</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2  col-md-4 col-sm-12">
          <ul className="footer-elements-links">
            <li>
              <a href="">Talent Solutions</a>
            </li>
            <li>
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Small Business</a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-3  col-md-4 col-sm-12"
          style={{
            justifyContent: "center",
            marginTop: "5px",
            flexDirection: "column",
          }}
        >
          <ul>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.5",
                fontSize: "13px",
                fontWeight: 700,
                color: "#616160",
              }}
              className=" mb-4"
            >
              {" "}
              <HiQuestionMarkCircle
                size="18"
                style={{
                  position: "absolute",
                  left: "-20px",
                  bottom: "16px",
                }}
              />
              <a href="" style={{ color: "#616160" }}>
                Questions ?
              </a>
              <small style={{ fontSize: "11px" }}>Visit our Help Center.</small>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.5",
                fontSize: "13px",
                fontWeight: 700,
                color: "#616160",
              }}
            >
              <FaCog
                size="16"
                style={{
                  position: "absolute",
                  left: "-20px",
                  bottom: "17px",
                }}
              />
              <a href="" style={{ color: "#616160" }}>
                Manage your account and Privacy
              </a>
              <small style={{ fontSize: "11px" }}>Go to your Settings.</small>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-3  col-md-4 col-sm-12 mt-1 "
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.5",
            marginBottom: "20px",
            color: "#616160",
            fontWeight: 300,
            fontSize: "14px",
          }}
        >
          Select Language
          <select className="languageSelector">
            <option>English</option>
            <option>Italiano(Italian)</option>
            <option>Deutsch(German)</option>
            <option>Pyccknn(Russian)</option>
            <option>Portuguese</option>
            <option>SexyBeastese </option>
          </select>
        </div>
      </div>
      <div className="row" style={{ fontSize: "12px" }}>
        <div className="col-12 pb-4">LinkedIn Corporation &copy; 2020</div>
      </div>
    </div>
  );
};

export default Footer;
