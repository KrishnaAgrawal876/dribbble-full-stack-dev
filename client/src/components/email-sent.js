import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./signup";
import "./email-sent.css";
import emailLogo from "../images/email-sent.webp";

const EmailSent = () => {
  return (
    <div className="footer-com">
      <h1 className="email-head"> Please verify your e-mail.... </h1>
      <img src={emailLogo} alt="image" />
      <p className="para">
        {" "}
        Please verify youe email address. We've sent a confirmation email to:{" "}
      </p>
      <h5 className="email-add"> Your Email Address </h5>
      <p className="para">
        {" "}
        Click the confirmation link in that email to begin using Dribbble.{" "}
      </p>
      <p className="para">
        {" "}
        Didn't receive the email? Check your Spam folder, it may have been
        caught by a filter.
      </p>
      <p className="para">
        {" "}
        If you still don't see it, you can{" "}
        <a href="#"> resend the confimation email. </a>
      </p>
      <p className="para">
        {" "}
        Wrong email address? <a href="#"> Change it. </a>{" "}
      </p>

      <footer className="footer">
        <div className="column">
          <h1> Dribbble </h1>
          <img src="logo.png" alt="Logo" />
          <p>
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <div className="social-icons">
            <Container id="social-media-icon">
              <a className="anc" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a className="anc" href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="anc" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a className="anc" href="https://pinterest.com">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </Container>
          </div>
        </div>
        <div className="column">
          <h3>For Designers</h3>
          <ul className="footer-list">
            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast!</li>
            <li>Playoffs</li>
            <li>Weekly Warm-Up</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
          </ul>
        </div>
        <div className="column">
          <h3>Hire Designers</h3>
          <ul className="footer-list">
            <li>Post a job opening</li>
            <li>Post a freelance project</li>
            <li>Search for designers</li>
            <li>Brands</li>
            <li>Advertise with us</li>
          </ul>
        </div>
        <div className="column">
          <h3>Company</h3>
          <ul className="footer-list">
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Media kit</li>
            <li>Testimonials</li>
            <li>API</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="column">
          <h3>Directors</h3>
          <ul className="footer-list">
            <li>Design jobs</li>
            <li>Designers for hire</li>
            <li>Freelance designers for hire</li>
            <li>Tags</li>
            <li>Places</li>
            <li>Digital assets</li>
            <li>Dribbble Marketplace</li>
            <li>Creative market</li>
            <li>Fontspring</li>
            <li>Font Squirrel</li>
          </ul>
        </div>
        <div className="column">
          <h3>Design Resources</h3>
          <ul className="footer-list">
            <li>Freelancing</li>
            <li>Design Hiring</li>
            <li>Design Portfolio</li>
            <li>Design Education</li>
            <li>Creative Process</li>
            <li>Design Industry Trends</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default EmailSent;
