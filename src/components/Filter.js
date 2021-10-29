/*eslint-disable*/

import React from "react";

import Logo from "../Logo.svg";
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';

function Filter() {
   

 
  return (
  
<>

<h6>Filter by Alliances</h6>
 


  <Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs">
    <Form.Check type="checkbox" label="Oneworld" />
    <Form.Check type="checkbox" label="Sky Team" />
    <Form.Check type="checkbox" label="Star Alliance" />
  </Form.Group>
   
</>
      



 
  );
}

export default Filter;