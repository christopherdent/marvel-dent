/*eslint-disable*/

import React from "react";

// import Logo from "../Logo.svg";
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


function Tile(props) {
   
//   function inAlliance() {

//     if (props.alliance !== "none") {

//        {props.alliance};

//     } else {

//     return null;
//   } 
// }

 const rootUrl = "http://kayak.com/"

 
  return (
 
            <>
             <Card id="air-tiles">
             
              
               <h5>{props.name} </h5>
               
               <img src =  {rootUrl + props.logo} />
              
               
              
             </Card>



            </>
                  



 
  );
}

export default Tile;