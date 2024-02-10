import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo  from '../../../Assets/logo.png'

const ProjectsPage = () => {
  return (
    <Row xs={2} md={3} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
                <Card style={{ width: '18rem', marginLeft: '1rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Header>Project</Card.Header>
                        <Card.Title>BGUN QUIZZ</Card.Title>
                        <Card.Text>
                            An African Youth Quizz Platform to make young africans more self-aware and
                            realise the greatness of their identity
                        </Card.Text>
                        <Button variant="danger">Button</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
  );
}

export default ProjectsPage;