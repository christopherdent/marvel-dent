/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import Tile from '../components/Tile'
import Heading from '../components/Heading'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Filter from '../components/Filter';


class Main extends React.Component {

  constructor() {
    super();
    
    this.state = {
      airlines: [],
      filter: 'none',
      checked: false
  }
} 
  

  fetchAirlines = () => {
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp"
    })
    .then(res => res.json())     
    .then(json => {
      this.setState({airlines : json, checked: false})
    })
  }

    componentDidMount(){
      this.fetchAirlines()
    }

    handleCheckbox = e => {
      if (this.state.filter === e.target.value) this.setState({ filter: "none" });
      else this.setState({ filter: e.target.value, checked: true });
    };
    
  
  render(){   
      
    const filterList = this.state.airlines.map(airline => {
          if (airline.alliance === this.state.filter || this.state.filter === "none")             
          return (            
            <Col sm={6} md={4} lg={3}>
            <Tile 
              key = {airline.code}
              logo = {airline.logoURL}
              name = {airline.name}
              alliance = {airline.alliance}
              phone = {airline.phone}
              site = {airline.site}
            />
         </Col>         
        );
      });
    
  
  return ( 
    <>    
        <Container>
        <Heading />
        <Filter 
        handleCheckbox = {this.handleCheckbox}
        />
        <Row>
         {filterList}
        </Row>
      </Container>
    </>
    );
  }
}
export default Main;