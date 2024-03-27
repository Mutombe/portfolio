import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import useDataFetcher from "../../../utils/api-service";
import { PROJECTS_URL } from "../../../constants";
import { Link } from 'react-router-dom'



const ProjectsPage = () => {
    const {data, loading, error } = useDataFetcher(PROJECTS_URL)

    if (loading){
      return <div>Loading...</div>;
    }

    if (error) {
        return (
          <div>
             <br/>
            Error: {error.message}
          </div>
        )
    }  

    return (

      <div className="my-div">
        <Container className='p-4'>
          <Row>
            {data.map((project) => (
            <Col key={project.id} xs={12} sm={6} md={4}>
              <Card style={{ width: '18rem', marginTop: '1em' }}>
                <Card.Img variant="top" src={project.project_picture} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.description.substr(0, 20)}...
                    </Card.Text>
                        
                    <Link to={`/projects/${project.id}`} style={{textDecoration: "none"}}>Details</Link>
                
                </Card.Body>
              </Card> 
            </Col>
            ))}
          </Row>
        </Container>
      </div>
  );
}



export default ProjectsPage;