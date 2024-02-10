import { Card } from "reactstrap";
import Button from 'react-bootstrap/Button';

function ProjectsPull() {
    return (
       <div>
           <h1>Project Page</h1>
   
           <Card style={{ width: '18rem' }}>
               <Card.Img variant="" src="holder.js/100px180" />
               <Card.Body>
                   <Card.Title>Project Title</Card.Title>
                   <Card.Text>
                       Some quick example text to build on the card title and make the
                       bulk of card's content.
                   </Card.Text>
                   <Button variant="primary">Details</Button>
               </Card.Body>
           </Card>
       </div>
    );
   }

export default ProjectsPull;