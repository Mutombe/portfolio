import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LinksPage from './pages/links/links';
import Form from 'react-bootstrap/Form';

function Social() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Social
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Social Links</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LinksPage />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



const toggleBackgroundColor = (divElement) => {
  const currentColor = divElement.style.backgroundColor;
  const newColor = currentColor === 'black' ? 'white' : 'black';
  divElement.style.backgroundColor = newColor;
};

export const MyComponent = () => {
  const handleButtonClick = () => {
    const divElements = document.querySelectorAll('.my-div');
    divElements.forEach((divElement) => {
      toggleBackgroundColor(divElement);
    });
  };

  return (
    <div>
      <Button variant="info" onClick={handleButtonClick}>
          <Form>
            <Form.Check type="switch" id="custom-switch" label="Background"></Form.Check>
          </Form>
      </Button>
    </div>
  );
};

MyComponent()

export default Social;