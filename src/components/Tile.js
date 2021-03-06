/*eslint-disable*/

import React from "react"; 
import { Navbar, Container, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";




function Tile(props) {

      const breakString = (str, limit) => {
         let brokenString = '';
         for(let i = 0, count = 0; i < str.length; i++){
            if(count >= limit && str[i] === ' '){
               count = 0;
               brokenString += '\n' 
             
            }
            else{
               count++;
               brokenString += str[i];
            }
         }

         brokenString = brokenString.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                <br/>
            </span>
        ))
        return brokenString 
      }
   
      let titleString = breakString(props.title, 20)
 

      return (
         <>
            <Card className="card comic-tiles">          
               <img src =  {props.image} />        
               <div className = "info-box">
               <span> {titleString} </span>
               <ul className = "hover-box">
                 <li>{props.creators}</li>
                 <li><a href = {props.moreinfo} target="_blank" rel="noopener noreferrer">★ More Info</a></li>
                 <li><a href = { ` http://www.google.com/search?tbm=shop&q=${encodeURIComponent(props.title)} ` } target="_blank" rel="noopener noreferrer">★ Check Prices / Buy</a></li>
                </ul>
               </div>
            </Card>
      </>
  );
}

export default Tile;