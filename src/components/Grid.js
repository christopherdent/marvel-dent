/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Tile from "./Tile"


 

//CardList




// const Grid = (props) => {
  
  class Grid extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        airlines: [],

    };
      }
 
      componentDidMount(props){
        this.setState({airlines: this.props.airlines})
      }

     buildTile = (props) => {
        console.log("Hi Chris")
        


        return this.state.airlines.map((airline, index) => {

        <Col  sm={6} md={4} lg={3}>
          <Tile
          id = {index}
          airline = {airline}
          site={airline.site}
          code={airline.code}
          alliance={airline.alliance}
          phone={airline.phone}
          name = {airline.name}
          usName={airline.usName}
          clazz={airline.__clazz}
          defaultName={airline.defaultName}
          logoURL={airline.logoURL}   
        />

       </Col>
        }
        )
    }

     unlist = (props) => {
      return this.state.airlines.map((airline, index) => 
        
          <li>{airline.name}</li>
        
      ) 
    }


 render(){
  return (
    <>

 
  
  <Row>
  {this.buildTile()}
  </Row>
   
   <ul>
   {this.unlist()}
   </ul>
  
 
    </>
  );
}
}
export default Grid;