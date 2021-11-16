/*eslint-disable*/

import React from "react";

// import Logo from "../Logo.svg";
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


function Tile(props) {
  

  
  return (
         <>
          <Card id="air-tiles">          
             <img src =  {props.image} />
              <div id = "info-box">
              <span> {props.name} </span>
              <ul id = "hover-box">
                <p>{props.title}</p>
                <li>URL: {props.bitly}</li>
                <li><a href = {props.source}>Source</a></li>
               </ul>
            </div>
         </Card>
      </>
  );
}

export default Tile;