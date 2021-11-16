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
          name= 'animals'
         />
          
        <Form.Check             
          type="radio" 
          label="Squirells" 
          id= "squirell" 
          onClick={props.handleCheckbox}
          value="Squirells"
          defaultChecked = {false}
          name= 'animals'
         />
          
          <Form.Check 
          type="radio" 
          label="Cats" 
          id = "cats"  
          onClick={props.handleCheckbox}
          value="cats"
          defaultChecked = {false}
          name= 'animals'
          />
         
          <Form.Check 
          type="radio" 
          label="Dragons" 
          id = "Dragons"  
          onClick={props.handleCheckbox}
          value="dragons"
          defaultChecked = {false}
          name= 'animals'
          />
      </Form.Group>
  </>
    
  );
}

export default Filter;