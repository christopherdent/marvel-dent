/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Tile from "./Tile"


 

//CardList




// function Grid(props) {
    
   


//   const [airlines, setAirlines] = useState({

   
    
//     site:null,
//     code:null,
//     alliance:null,
//     phone:null,
//     name : null,
//     usName:null,
//     clazz:null,
//     defaultName:null,
//     logoURL:null
      

//   })
    
// useEffect(() => {
// const data = localStorage.getItem("airlines")
// if (data) {
//   setAirlines(JSON.parse(data))
// }
// }, [])



// useEffect(() => {
//     localStorage.setItem('airlines', JSON.stringify(props))
//   })


 
// const buildTile = () => {
   
             
      //   console.log("Hi Chris")
          

      //   return props.airlines.map((airline, index) => {

      //     <Col sm={6} md={4} lg={3}>
      //     <Tile
      //       id = {index}
      //       airline = {airline}
      //       site={airline.site}
      //       code={airline.code}
      //       alliance={airline.alliance}
      //       phone={airline.phone}
      //       name = {airline.name}
      //       usName={airline.usName}
      //       clazz={airline.__clazz}
      //       defaultName={airline.defaultName}
      //       logoURL={airline.logoURL}  
      //   />

      //  </Col>
        // }
        // )
    
    // }

    //  const unlist : (props) :> {
    //   return this.props.airlines.map((airline, index) :> 
        
    //       <li>{airline.name}</li>
        
    //   ) 
    // }


//   return (
//     <>

 
  
//   <Row>
//   {buildTile()}
//   </Row>
   
    
  
 
//     </>
//   );
// }

// export default Grid;






class Grid extends React.Component {

   

    buildTile = () => {
               
        console.log("Hi Chris")
   

        return this.props.airlines.map((airline, index) => 

        <Col sm={6} md={4} lg={3}>
            <Tile 
            key = {index}
            logo = {airline.logoURL}
            name = {airline.name}
            alliance = {airline.alliance}
            />
         </Col>
          
        )
      }





  render() {
    return(
  <>
    
     { console.log(this.props)}
  <Row>
     {this.buildTile()}
  </Row>


     
  </>
    )
  }
}

export default Grid