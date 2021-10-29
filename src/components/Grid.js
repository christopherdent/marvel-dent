/*eslint-disable*/

import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Tile from "./Tile"


// {
//     "site": "https://subus.cl/",
//     "code": "SUBUS",
//     "alliance": "none",
//     "phone": "",
//     "name": "SuBús",
//     "usName": null,
//     "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
//     "defaultName": null,
//     "logoURL": "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=prod-53c992c414762cccc65bc9a140212613464bcac5"
//   },




//CardList




function Grid(props) {

    const buildTile = () => {
        console.log("Hi Chris")
         
        props.airlines.map((airline, index) => 


        <Tile
        
        id = {index}
        airline = {airline}
        site={airline.site}
        code={airline.code}
        alliance={airline.alliance}
        phone={airline.phone}
        usName={airline.usName}
        clazz={airline.__clazz}
        defaultName={airline.defaultName}
        logoURL={airline.logoURL}
              
        />
    
        )
    }


 
  return (
    <>
 {buildTile()}
 
  
  <Row>
  
    <Col  sm={6} md={4} lg={3}>
    <Tile />
    </Col>

    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>

    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>

    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>
    
    <Col  sm={6} md={4} lg={3}>
     <Tile />
    </Col>

    </Row>
   
 


 
    </>
  );
}

export default Grid;