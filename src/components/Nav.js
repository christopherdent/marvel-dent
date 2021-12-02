/*eslint-disable*/
import React from "react";

import { Navbar } from 'react-bootstrap';


function Nav() {
   
  return (  
    <>
    <br />  
      <Navbar>
        <a href = 'http://www.christopher-dent.com' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        height = '40px'
        
        id = "cjdlogo"
        />
        </a> 

        <a href = 'https://christopherdent.github.io/marvel-dent/' target="_blank" rel="noopener noreferrer">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
        id = "mlogo"
        alt="logo"     
        height='100px'
         />
         <br/>
        <center> <span id = 'collector_link'>comic collector!</span> </center>
        </a> 
        <a href = 'http://www.christopher-dent.com' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        height = '40px'
        id = "cjdlogo2"
        />
        </a> 

        {' '}  

      </Navbar>
      </>
  );
}

export default Nav;