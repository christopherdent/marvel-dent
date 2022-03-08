// import React, { useState } from "react";
import React, { useState }  from "react";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'

import { Form, Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap'; 
import { useFormik } from 'formik';
import AdvancedSearchForm from "./AdvancedSearchForm";
 
const validate = values => {
  const errors = {};
  
    if (!values.term) {
    errors.term = 'Please enter a search term';
  } 
  return errors;
};


function SearchBar(props) {

  const formik = useFormik({
    initialValues: { term: "" },
    validate,
    onSubmit: values => {
      props.onSearchClick(values.term) 
    }
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className = 'searchArea' >
      {/* <label htmlFor="term">Search Marvel for...</label> */}
      <input
        id="term"
        name="term"
        type="text"        
        value={formik.values.term}
        onKeyUp={props.onSearchChange}
        onChange = {formik.handleChange} 
       
      />

      { formik.errors.term ? (<div>{formik.errors.term}</div>) : null}
       
        
      <Button type="submit" className="btn btn-danger btn-block" >Search Marvel for {props.term ? props.term : '.....'}</Button>

        <br />
      </div>
    </form>
  );

  };

export default SearchBar;