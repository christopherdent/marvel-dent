/*eslint-disable*/

import React from "react";

import Logo from "../Logo.svg";
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
   

 
  return (
  
    
      <Navbar>
        <div id = 'navCon'>
        
              <img 
              src={Logo}
              className="d-inline-block align-top"
              alt="kayak logo"
              
              />{' '}
        
        </div>
      </Navbar>

      



 
  );
}

export default Nav;