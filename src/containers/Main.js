/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Filter from '../components/Filter'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
 






function Main(props) {

   
 
  return (
  <>
    <Nav />
      <Container>
        <Heading />
        <Filter />
        <Grid 
        airlines = {props.airlines}/>
     </Container>
  </>
  );
}

export default Main;