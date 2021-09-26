import React from 'react'
import { Offcanvas } from 'bootstrap';
import { useState } from 'react';

export const Help = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Flashcard instructions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          1. Choose a Category
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
