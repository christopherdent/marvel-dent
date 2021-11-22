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
              <span> {props.title} </span>
              <ul id = "hover-box">
                {/* <p>{props.title}</p> */}
                <li>{props.creators}</li>
                <li><a href = {props.moreinfo} target="_blank" rel="noopener noreferrer">More Info</a></li>
                <li><a href = { ` http://www.google.com/search?tbm=shop&q=${props.title} ` } target="_blank" rel="noopener noreferrer">Check Prices / Buy</a></li>
               </ul>
            </div>
         </Card>
      </>
  );
}

export default Tile;