import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LinksPage from './pages/links/links';


function Social() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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


export default Social;