/*eslint-disable*/

import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Filter(props) {
   
  
  return (
  
<>

   
<Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs" className="alliance-list">

        <Form.Check             
          type="radio" 
          label="All" 
          id= "All" 
          
          value="All"
          defaultChecked = {false}
          name= 'allys'
         />
          
        <Form.Check             
          type="radio" 
          label="other option" 
          id= "other option" 
          onClick={props.handleCheckbox}
          value="other 1"
          defaultChecked = {false}
          name= 'allys'
         />
          
          <Form.Check 
          type="radio" 
          label="other 2" 
          id = "other 2"  
          onClick={props.handleCheckbox}
          value="other2"
          defaultChecked = {false}
          name= 'allys'
          />
         
          <Form.Check 
          type="radio" 
          label="other3" 
          id = "other 3"  
          onClick={props.handleCheckbox}
          value="other3"
          defaultChecked = {false}
          name= 'allys'
          />
      </Form.Group>
  </>
    
  );
}

export default Filter;