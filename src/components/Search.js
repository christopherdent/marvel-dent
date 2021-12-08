// import React, { useState } from "react";
import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'



function SearchBar(props) {

// const [term, setTerm] = useState("")


const renderTooltip = (props) => (
  <Tooltip {...props}>
    Coming soon...
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip {...props}>
    Search titles as you type..
  </Tooltip>
);


  return (
    <form>
      <div className = 'searchArea' >

      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip2}
      > 
        <input
            type="text"
            id="header-search"
            placeholder="title starts with..."
            name="s" 
            onChange=  {props.onChange} 
        />
         </OverlayTrigger>
             <button
        type="submit"  
        className="btn btn-danger btn-block"
        onClick={props.onClick}
         > Search Marvel for { props.term === null ? "..." : props.term }
        </button>

<center>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      > 
      <p id='advancedSearch'>Advanced Search?</p>

      </OverlayTrigger>
</center>
        
     
 
        <br />  
        </div>
        </form>
 );
  };

export default SearchBar;