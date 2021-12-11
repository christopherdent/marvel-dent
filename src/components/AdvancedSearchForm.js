/*eslint-disable*/

import React from "react";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


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
           <div className="form-group">
          <label htmlFor="name">Name</label>
           <input className="form-control" id="name" />
        </div> 
      
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email"
        placeholder="name@example.com" 
        />
    </div>


              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={handleClose} id="advancedSearchButton">
                Search Marvel 
              </Button>
         </Form>
            
            </center>
    </>
  );
}

export default AdvancedSearchForm;