/*eslint-disable*/
import React from "react";
import Logo from "../Logo.svg";
import { Navbar } from 'react-bootstrap';


function Nav() {
   
  return (    
      <Navbar>    
        <img 
        src={Logo}
        className="d-inline-block align-top"
        alt="kayak logo"                
        />{' '}              
      </Navbar>
  );
}

export default Nav;