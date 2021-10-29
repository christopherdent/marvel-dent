/*eslint-disable*/

import React from "react";
import Nav from '../components/Nav'
import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Filter from '../components/Filter'
import { Container, Row, Col, Card } from 'react-bootstrap';
 






function Main() {
 
  return (
  <>
    <Nav />
      <Container>
        <Heading />
        <Filter />
        <Grid />
     </Container>
  </>
  );
}

export default Main;