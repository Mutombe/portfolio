import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from 'react-router-dom';
import { PROJECTS_URL } from "../../../constants";
import { Link } from 'react-router-dom';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    
  useEffect(() => {
    //Fetch project details from the backend or perform any neccessary logic
    //You can use the 'id' parameter to retrieve the specific project details

    //Fetching project details using an API 
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${PROJECTS_URL}/${id}`);
        if (!response.ok){
            throw new Error('Failed to fetch project details');
        }
        const projectData = await response.json();
        setProject(projectData); 
      } catch (error) {
        console.error(error);
      } 
    };
    fetchDetails();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
          <div className="my-div">
            <Container className='p-4' style={{ justifyContent: 'center' }}>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Card style={{ width: '18rem', marginTop: '1em' }}>
                    <Card.Img variant="top" src={project.project_picture} />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                        <Link to={`${project.github}`} style={{textDecoration: "none"}}>Github</Link>
                        <Card.Text>
                            {project.start_date}<strong> -- </strong>{project.end_date}
                        </Card.Text>
                    </Card.Body>
                  </Card> 
                </Col>
              </Row>
            </Container>
          </div>
  );
}


export default ProjectDetailsPage;