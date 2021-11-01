/*eslint-disable*/

import React from "react";

// import Logo from "../Logo.svg";
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


function Tile(props) {
  
  const rootUrl = "http://kayak.com/"
//removing the URL parameters 
  let mySite = props.site.replace(/^\/\/|^.*?:(\/\/)?/, '')
  mySite = mySite.replace(/\/.*$/, "");
  mySite = mySite.replace("www.", "")
//show proper alliance name based on json code 
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
              <span> {props.name} </span>
              <ul id = "hover-box">
                    {props.alliance === "OW" ? <li>One World</li> : null}
                    {props.alliance === "ST" ? <li>SkyTeam</li> : null}
                    {props.alliance === "SA" ? <li>Star Alliance</li> : null}
                <li>{props.phone}</li>
                <li><a href = {props.site}>{mySite}</a></li>
               </ul>
            </div>
         </Card>
      </>
  );
}

export default Tile;