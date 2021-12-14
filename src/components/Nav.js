/*eslint-disable*/
import React from "react";

import { Navbar } from 'react-bootstrap';


function Nav() {
   
  return (  
    <>  
      <Navbar className='headers'>


      <a href = 'http://www.christopher-dent.com' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        className = 'sideLogos'
        height = '30px'
        id = "cjdlogo1"
        />
        </a> 


        <a href = 'https://developer.marvel.com/' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/PngItem_95196.png"
        height = '80px'
        className = 'sideLogos'
    

        />
        </a> 

        <a href = 'https://www.marvel.com/' target="_blank" rel="noopener noreferrer">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
        id = "mlogo"
        alt="logo"     
        height='100px'

         />
        </a> 
          
        <a href = 'https://developer.marvel.com/' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/PngItem_95196.png"
        
        height = '80px'
      
        className = 'sideLogos'
        />
        </a> 

        <a href = 'http://www.christopher-dent.com' target="_blank" rel="noopener noreferrer">
        <img 
        src = "https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png"
        className = 'sideLogos'
        height = '30px'
        id = "cjdlogo2"
        />
        </a> 


 
        {' '}  
 
      
      </Navbar>
      
 
 </>
  );
}

export default Nav;