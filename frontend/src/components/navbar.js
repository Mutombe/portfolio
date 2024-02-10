import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Social from './design-util';


function MainNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
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

              <NavDropdown.Item href="cv">
                CV
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default MainNav;
