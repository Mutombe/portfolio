import { BOOKS_URL, PROJECTS_URL } from "../constants";
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
//import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";
import axios from 'axios'

async function sendRequest(url, options) {
    const reponse = await fetch(url, options);
    return await reponse.json();
}

function createRequestOptions(method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
   };
}

export async function fetchProjects(url) {
    return await sendRequest(url);
}

export async function fetchBooks() {
    return await sendRequest(BOOKS_URL);
}

export async function postBooks(book) {
    const options = createRequestOptions('POST', book);
    return await sendRequest(BOOKS_URL, options);
}

export async function updateBookSuggestion(id, book) {
    const options = createRequestOptions('PUT', book);
    await sendRequest(`${BOOKS_URL}/${id}`, options);
}

export async function projectDetails(id) {
  const options = createRequestOptions('GET');
  await sendRequest(`${PROJECTS_URL}/${id}`, options);
}

export async function deleteBookSuggestion(id) {
    const options = createRequestOptions('DELETE');
    await sendRequest(`${BOOKS_URL}/${id}`, options);
}

const useDataFetcher = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const forceDownload = (response, title) =>{
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', title+'.pdf')
    document.body.appendChild(link)
    link.click()
}

export const DownloadWithAxios = (url, title) => {
  const [error, setError] = useState(null);
  //const [downloadProgress, setDownloadProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handledownload = () => {
  axios({
    method: 'get',
    url,
    responseType: 'arraybuffer'
  }).then((response)=>{
    forceDownload(response, title)
  }).catch((error)=>{
        console.error('Error downloading book:', error);
        setError(error.message);
        setShowModal(true);
  })
  };
  const closeModal = () => {
    setError(null);
    setShowModal(false);
  };


  return (
    <div>
      <button onClick={handledownload}>Download PDF</button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default useDataFetcher;