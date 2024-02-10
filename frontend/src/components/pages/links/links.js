import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function LinksPage() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
        <ul style={{listStyle: "none"}} className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Muzmmil207"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100086063400724"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muzamil-ali-63230a206"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mly88207@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default LinksPage;