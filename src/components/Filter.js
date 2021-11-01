/*eslint-disable*/

import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Filter(props) {
   
  
  return (
  
<>

   
<Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs" className="alliance-list">
          
          
        <Form.Check             
          type="checkbox" 
          label="One World" 
          id= "One World" 
          onClick={props.handleCheckbox}
          value="OW"
         />
          
          <Form.Check 
          type="checkbox" 
          label="Sky Team" 
          id = "Sky Team"  
          onClick={props.handleCheckbox}
          value="ST"
          />
         
          <Form.Check 
          type="checkbox" 
          label="Star Alliance" 
          id = "Star Alliance"  
          onClick={props.handleCheckbox}
          value="SA"
          />
      </Form.Group>
  </>
    
  );
}

export default Filter;