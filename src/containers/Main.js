/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import Tile from '../components/Tile'
import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Filter from '../components/Filter'
import Nav from '../components/Nav'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
 






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
      // json.forEach(airline => console.log(JSON.stringify(airline.name)));
      this.setState({airlines : json, checked: false})
      console.log(this.state)
    })
  }

 

    componentDidMount(){
      this.fetchAirlines()
    }

    handleCheckbox = e => {
      if (this.state.filter === e.target.value) this.setState({ filter: "none" });
      else this.setState({ filter: e.target.value, checked: true });
    };
    

  

    //unify all checkboxes to share logic, e holds information about event that triggered this function, we will add value to each checkbox for easy access
    handleCheckbox = e => {
       
      if (this.state.filter === e.target.value) this.setState({ filter: "none" });

      else this.setState({ filter: e.target.value, checked: true });
       
    };

  
  render(){   
       //mapped variable will handle filtering results, if `state.filter` matches `item.type` item will be rendered, also if filter is set to none, all items are rendered, this will not preserve multiple filters though,
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
        
         
       
          <Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs" className="alliance-list">
          
     

          <Form.Check 
             
            type="checkbox" 
            label="One World" 
            id= "One World" 
            onClick={this.handleCheckbox}
           
            value="OW"
            />
          <Form.Check 
           
          type="checkbox" 
          label="Sky Team" 
          id = "Sky Team"  
          onClick={this.handleCheckbox}
         
          value="ST"
          />
          <Form.Check 
          type="checkbox" 
          label="Star Alliance" 
          id = "Star Alliance"  
          onClick={this.handleCheckbox}
          value="SA"
          />
           
      </Form.Group>

       <Row>
         {filterList}
      </Row>
          
          {/* <Filter 
          airlines = { this.state.airlines }
          onCheckBoxChanged = { event => console.log(event) }
           
          /> */}


          {/* <Grid 
            airlines = { this.state.airlines }
            tests = { 'Im a little tea prop' }
            
            /> */}
        </Container>
    </>
    );
  }
}
export default Main;