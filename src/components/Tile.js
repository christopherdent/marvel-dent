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

 
  const alliance = () => {
    if (props.alliance !== "none") {
     return <li>{props.aliance}</li>
    }
  }

  return (
 
            <>
             <Card id="air-tiles">
             
              
               
               
               <img src =  {rootUrl + props.logo} />
          
              <div id = "info-box">
               <p>{props.name} </p>

               
               <ul id = "hover-box">
                { props.alliance !== "none" ? <li>{props.alliance}</li> : null }
                <li>{props.props}</li>
                <li>{props.site}</li>
               </ul>
               </div>
             </Card>



            </>
                  



 
  );
}

export default Tile;