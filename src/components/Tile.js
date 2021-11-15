/*eslint-disable*/

import React from "react";

// import Logo from "../Logo.svg";
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


function Tile(props) {
  

  
  return (
         <>
          <Card id="air-tiles">          
             <img src =  "" />
              <div id = "info-box">
              <span> {props.name} </span>
              <ul id = "hover-box">
                <p>name</p>
                <li>'more info'</li>
                <li>more info2</li>
               </ul>
            </div>
         </Card>
      </>
  );
}

export default Tile;