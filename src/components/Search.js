// import React, { useState } from "react";
import React, { useState }  from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom";
import AdvancedSearchForm from "./AdvancedSearchForm";
import FocusTrap from 'focus-trap-react';

function SearchBar(props) {

// const [term, setTerm] = useState("")

///all for modal 
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  } 
  
  
///

const renderTooltip = (props) => (
  <Tooltip {...props}>
    Search titles as you type...
  </Tooltip>
);

 


  return (
  <>
    <form>
      <div className = 'searchArea' >

      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
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
        onClick={props.onSearchClick}
         > Search Marvel for { props.term === null ? "..." : props.term }
        </button>
       
        </div>
        </form>
      
   {/* below here is advanced search and should eventually be moved into a separate component       */}
        <center>
          <p id='advancedSearch' onClick={handleShow}> Advanced Search? </p>
          </center>
       

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton />
              <Modal.Body>            
                <AdvancedSearchForm
                
                onSubmit = {props.onAdvancedSubmit} 
                setShow = {setShow}
                term = {props.term}
                />
              </Modal.Body>
              <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={handleClose} id="advancedSearchButton" disabled>
                Search Marvel 
              </Button> */}
            
          
            </Modal.Footer>
          </Modal>
         
          
  
      </>
    );
  };

export default SearchBar;