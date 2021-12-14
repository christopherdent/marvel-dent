/*eslint-disable*/

import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function AdvancedSearchForm(props) {
   
  function handleClose() {
    props.onSubmit();   ///runs search 
    props.setShow(false);   ///closes modal 
    
  } 
  


  return (
  
    <>
    <center>

    <p>Advanced Search Coming Soon!</p>
      <Form onSubmit={props.onSubmit}>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">       
          <Form.Label column sm={2}>Comic Name</Form.Label >
            <Col sm={10}>
              <Form.Control id="name" tyoe='text' />
            </Col>
          </Form.Group>
            
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalIssue">
          <Form.Label column sm={2}>Issue Number</Form.Label >
              <Col sm={10}>
                <Form.Control id="issue" type='number' placeholder="e.g. 23" />
              </Col>
        </Form.Group>
          
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCharacters">
          <Form.Label column sm={2}>Has characters...</Form.Label >
              <Col sm={10}>
                <Form.Control type="text" className="form-control" id="characters" placeholder="e.g. Spider-Man" />
              </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCreators">
          <Form.Label column sm={2}>Creator name(s)</Form.Label >
              <Col sm={10}>
                <Form.Control type="text" id="creators" placeholder="Stan Lee, Jack Kirby" />
              </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalIsbn">
          <Form.Label column sm={2}>ISBN</Form.Label >
              <Col sm={10}>
                <Form.Control type="number" id="isbn" placeholder="Stan Lee, Jack Kirby" placeholder="e.g. 9780785185697" />
              </Col>
        </Form.Group>
      
  
    


              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={handleClose} id="advancedSearchButton" disabled>
                Search Marvel 
              </Button>
         </Form>
            
            </center>
    </>
  );
}

export default AdvancedSearchForm;