/*eslint-disable*/

import React from "react";

import Logo from "../Logo.svg";
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


function Tile(props) {
   

 
  return (
  
            <>
             <div id="air-tiles">
               
               <img src = {props.logo} />
               
             </div>
            



            </>
                  



 
  );
}

export default Tile;