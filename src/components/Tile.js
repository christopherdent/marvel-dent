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
             
              
               
               
               <img src =  {rootUrl + props.logo} />
          
               <p>{props.name} </p>
              
             </Card>



            </>
                  



 
  );
}

export default Tile;