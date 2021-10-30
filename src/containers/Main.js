/*eslint-disable*/

import React, { useState, useEffect } from 'react'

import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Filter from '../components/Filter'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
 






class Main extends React.Component {
  state = {
    airlines: []
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


  render(){   
     
  return (

    <>    
        <Container>
          <Heading />
          <Filter />
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