import React from "react";


const SearchBar = (props) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search comics</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search comics"
            name="s" 
        />
        <button onClick={props.handleClick}> Search </button>
    </form>
);

export default SearchBar;