// import React, { useState } from "react";
import React from "react";

function SearchBar(props) {

// const [term, setTerm] = useState("")

  return (
    <form>
      <div className = 'searchArea' >
        <input
            type="text"
            id="header-search"
            placeholder="title starts with..."
            name="s" 
            onChange=  {props.onChange} 
        />
        
        <br />  

        <button
        type="submit"  
        className="btn btn-danger"
        onClick={props.onClick}
         > Search Marvel for { props.term === null ? "..." : props.term }
        </button>
 
        <br />  
        </div>
        </form>
 );
  };

export default SearchBar;