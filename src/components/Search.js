import React from "react";


const SearchBar = (props) => (


<div class = 'searchArea' >
    <input
            type="text"
            id="header-search"
            placeholder="Enter title"
            name="s" 
            onChange={props.onChange}
        />
        <br />  

        <button
        type="button" 
        class="btn btn-danger"
        onClick={props.onClick}
        > Search Marvel 
        </button>
        <br />  
        </div>
 
);

export default SearchBar;