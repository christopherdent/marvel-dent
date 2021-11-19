import React, { useState } from "react";


function SearchBar(props) {
const [term, setTerm] = useState("")
  return (

<div class = 'searchArea' >
    <input
            type="text"
            id="header-search"
            placeholder="Enter title"
            name="s" 
            onChange=  {props.onChange} 
        />
        <br />  

        <button
        type="button" 
        class="btn btn-danger"
        onClick={props.onClick}
        > Search Marvel for {props.term}
        </button>
        <br />  
        </div>
 );
  };

export default SearchBar;