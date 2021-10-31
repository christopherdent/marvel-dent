/*eslint-disable*/

import React, { useState, useEffect } from 'react'

import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Filter from '../components/Filter'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
 






class Main extends React.Component {

  constructor() {
    super();
    // this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
    this.state = {
      airlines: []
    }
  }
  
  

  fetchAirlines = () => {
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp"
    })
    .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data )
    //   this.setState({ airlines: data })  
    .then(json => {
      json.forEach(airline => console.log(JSON.stringify(airline.name)));
      this.setState({airlines : json})
      // json.forEach(airline => allAirlines.push(airline));
          
    })
  }

 

    componentDidMount(){
      this.fetchAirlines()
    }


    onCheckBoxChanged = (event) => {
        
      // Just to show an indication that I got in the function
      console.log("i got clicked");
    }
  

    handleClick = () => {

      const airlineArray = this.state.airlines 
      let filteredAirlines = airlineArray.filter(airline => airline.name === "Delta")

      this.setState({
        airlines: filteredAirlines
      })

      console.log('test')
    
    }


  render(){   
     
  return (

    <>    
        <Container>
          <Heading />
          <Button onClick = {this.handleClick}> Tester </Button> 
    
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id="inputs">
            <Form.Check type="checkbox" label="Oneworld" id= "oneworld" onClick = {this.onCheckBoxChanged}/>
            <Form.Check type="checkbox" label="Sky Team" id = "skyteam"  onClick = {this.onCheckBoxChanged}  />
            <Form.Check type="checkbox" label="Star Alliance" id = "staralliance" onClick = {this.onCheckBoxChanged} />
            </Form.Group>
          

       
       
          {/* <Filter 
          airlines = { this.state.airlines }
          onCheckBoxChanged = { event => console.log(event) }
           
          /> */}


          <Grid 
            airlines = { this.state.airlines }
            tests = { 'Im a little tea prop' }
            
            />
        </Container>
    </>
    );
  }
}
export default Main;