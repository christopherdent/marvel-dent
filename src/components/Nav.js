/*eslint-disable*/
import React from "react";

import { Navbar } from 'react-bootstrap';


function Nav() {
   
  return (    
      <Navbar>
        <a href = 'http://www.christopher-dent.com'>
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        height = '40px'
        
        id = "cjdlogo"
        />
        </a> 

        <a href = 'http://www.marvel.com'>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
        id = "mlogo"
        alt="logo"     
        height='100px'
         />
        </a> 
        <a href = 'http://www.christopher-dent.com'>
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        height = '40px'
        id = "cjdlogo2"
        />
        </a> 

        {' '}  

      </Navbar>
  );
}

export default Nav;