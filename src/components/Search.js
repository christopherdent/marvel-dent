// import React, { useState } from "react";
import React, { useState }  from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import AdvancedSearchForm from "./AdvancedSearchForm";


function SearchBar(props) {

// const [term, setTerm] = useState("")

///all for modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
///

// const renderTooltip = (props) => (
//   <Tooltip {...props}>
//     Coming soon...
//   </Tooltip>
// );

const renderTooltip= (props) => (
  <Tooltip {...props}>
    Search titles as you type..
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
        onClick={props.onClick}
         > Search Marvel for { props.term === null ? "..." : props.term }
        </button>
        <br />  
        </div>
        </form>
        <center>
          <p id='advancedSearch' onClick={handleShow}> Advanced Search? </p>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton />
              <Modal.Body>            
                <AdvancedSearchForm />
              </Modal.Body>
              <Modal.Footer>
              
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
              <Button variant="danger" onClick={handleClose} id="advancedSearchButton" disabled>
                Search Marvel 
              </Button>
            
            </Modal.Footer>
          </Modal>
          </center>
  
      </>
    );
  };

export default SearchBar;