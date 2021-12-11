/*eslint-disable*/

import React from "react";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


function AdvancedSearchForm(props) {
   
  function handleClose() {
    props.setShow(false);
  } 
  


  return (
  
    <>
    <center>

    <p>Advanced Search Coming Soon!</p>
    
    <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={handleClose} id="advancedSearchButton" disabled>
                Search Marvel 
              </Button>
         
            
            </center>
    </>
  );
}

export default AdvancedSearchForm;