import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyComponent } from "../../design-util";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function LinksPage() {
  return (
    <div className="my-div">
    <Container fluid className="my-div">
      <Row>
        <Col md="12" className="footer-body">
        <ul style={{listStyle: "none"}} className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mutombe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{display: 'flex', width: '3em'}}
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
                  href=": https://www.linkedin.com/in/simbarashe-mutombe-a104bb247
                  "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:simbarashemutombe1@gmail.com"
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
    </div>
  );
}

export default LinksPage;