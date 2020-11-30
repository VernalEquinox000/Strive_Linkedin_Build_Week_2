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
            <li>About</li>
            <li>Community</li>
            <li>
              Privacy & Terms <faChevronDown />
            </li>
            <li>Sales Solutions</li>
            <li>Safety Center</li>
          </ul>
        </div>
        <div className="col-lg-2  col-md-4 col-sm-12">
          <ul className="footer-elements-links">
            <li>Accessibility</li>
            <li>Careers</li>
            <li>Ad Choices</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="col-lg-2  col-md-4 col-sm-12">
          <ul className="footer-elements-links">
            <li>Talent Solutions</li>
            <li>Marketing</li>
            <li>Advertising</li>
            <li>Small Business</li>
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
              }}
              className=" mb-4"
            >
              {" "}
              <HiQuestionMarkCircle
                size="18"
                style={{
                  position: "absolute",
                  left: "-20px",
                  bottom: "14px",
                }}
              />
              Questions
              <small style={{ fontSize: "10px" }}>Visit our Help Center.</small>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.5",
              }}
            >
              <FaCog
                size="16"
                style={{ position: "absolute", left: "-20px", bottom: "15px" }}
              />
              Manage your account and Privacy
              <small style={{ fontSize: "10px" }}>Go to your Settings.</small>
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
          }}
        >
          Select Language
          <select>
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
