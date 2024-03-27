import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Social from './design-util';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyComponent } from './design-util';


function MainNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" bg="dark">
        <Container>
        
        <Social />
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav.Link href="projects">
              Projects
          </Nav.Link>

          <Nav className="me-auto">
            
            <Nav.Link href="git-metadata">
              Git
            </Nav.Link>
            
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">

              <NavDropdown.Item href="more">
                More
              </NavDropdown.Item>

              <NavDropdown.Item href="books">
                  Books
              </NavDropdown.Item>

              <NavDropdown.Item href="">
                <Button variant="info" onClick={handleShow}>
                  CV
                </Button>      
                <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Download CV</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Download my CV in PDF format</Modal.Body>
                        <Modal.Footer>
                          <Button variant="info" onClick={handleClose}>
                            Close
                          </Button>

                          
                          <Button variant="info">
                            <Nav.Link href="http://127.0.0.1:8000/media/SimbarasheMutombe_Resume_2.docx">Download</Nav.Link>
                          </Button>
                          


                        </Modal.Footer>
                    </Modal>
                </>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="articles">
                  Article
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="more">More</Nav.Link>
            <Nav.Link eventKey={2} href="profile">
                Profile
            </Nav.Link>
            <Nav.Link><MyComponent /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default MainNav;
