import React from "react";
//import MainNav from "../../navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ProfilePage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;