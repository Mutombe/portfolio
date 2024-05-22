import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useDataFetcher from "../../../utils/api-service";
import { BOOKS_URL } from "../../../constants";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { DownloadWithAxios } from "../../../utils/api-service";





function Books() {
  const { data, loading, error } = useDataFetcher(BOOKS_URL);
  if (loading) {
    return <div className="my-div">Loading...</div>;
  }
  
  if (error) {
    return <div className="my-div">Error: {error}</div>;
  } 

  return (
    <div
        aria-live="polite"
        aria-atomic="true"
        className="position-relative my-div"
        style={{ minHeight: '240px' }}
      >

        <ToastContainer className="bg-dark p-3" style={{ zIndex: 1 }}>
          <div className="toast-row" xs={12} sm={6} md={4}>
            {data.map((book) => (

              <Toast key={book.id} className="d-inline-block m-1" >
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">{book.name.substr(0, 26)}...</strong>
                  <button>{DownloadWithAxios}</button>
                </Toast.Header>
                <Toast.Body><strong>Category </strong>{book.category} - Year {book.year} </Toast.Body>
              </Toast>
            ))}
          </div>
        </ToastContainer>
      </div>
    );
}

export function Upload() {
    return (
        <div className="my-div">
        <Books />
       
        <Form style={{ width: '15em' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name of the book" />
                <Form.Text className="text-muted">
                    We'll use the name for labelling the file
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="file">
                <Form.Label>PDF FILE</Form.Label>
                <Form.Control type="file" placeholder="PDF FILE" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Add it to my suggestions" />
            </Form.Group>

            <Button variant="info">
                Submit
            </Button>
        </Form> 
        </div>
    );
}

export default Books
