/*eslint-disable*/

import React from "react";

import Logo from "../Logo.svg";
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';

function Filter(props) {
   

 
  return (
  
<>

<h6>Filter by Alliances</h6>
 


  <Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs">
    <Form.Check type="checkbox" label="Oneworld" id= "oneworld" onClick={props.onCheckboxChanged} />
    <Form.Check type="checkbox" label="Sky Team" id = "skyteam" onClick={props.onCheckboxChanged}  />
    <Form.Check type="checkbox" label="Star Alliance" id = "staralliance" onClick={props.onCheckboxChanged} />
  </Form.Group>
   
</>
      



 
  );
}

export default Filter;