/*eslint-disable*/

import React from "react";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


function AdvancedSearchForm(props) {
   
  
  return (
  
    <>
    <center>
    <p>Advanced Search Coming Soon!</p>
    

             <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={props.handleClose} id="advancedSearchButton" disabled>
                Search Marvel 
              </Button>
            
            
            </center>
    </>
  );
}

export default AdvancedSearchForm;