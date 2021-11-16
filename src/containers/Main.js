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
      gifs: [],
      filter : 'squirell'
    
      
  }
} 

  
 
  // fetchComics = (query = "squirell") => {
    fetchComics = (query = this.state.filter) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=DEvt17BerwqE1YuHcxBOt4EWH1cutiP4&rating=g`)
        

      .then(res => res.json())
      .then(({data}) => {
        console.log(data)
        this.setState({ gifs : data })
      })
  }
 
  // fetchComics(volume_id=1) {
//     fetch(`${this.API_URL}/volumes/${volume_id}/?api_key=${this.API_KEY}&format=json&field_list=issues,description,name`)
//         .then(response => {
//             return response.json().then(json => {
//                 return response.ok ? json : Promise.reject(json);
//             });
//         })
//         .then((data) => {
//            console.log(data)
//         })
//         .catch((error) => {
//             this.setState({
//                loading: false
//             });
//         });
// }


    componentDidMount(){
      this.fetchComics()
       
    }

    handleCheckbox = e => {
      if (e.target.value === "All") this.setState({ filter: "none" });
      else this.setState({ filter: e.target.value });
    };
    

  
  
  render(){   
      
    // const filterList = this.state.gifs.map(gif, index => {

    //   return 
    
    //       // if (airline.alliance === this.state.filter || this.state.filter === "none")             
    //       return (            
    //         <Col sm={6} md={4} lg={3}>
    //         <Tile 
    //           key = {index}
    //           url = {gif.url}
    //           // name = {airline.name}
    //           // alliance = {airline.alliance}
    //           // phone = {airline.phone}
    //           // site = {airline.site}
    //         />
    //      </Col>         
        // );



      // });
 
      const filterList = this.state.gifs.map(item => {
        console.log(item.url)

        // if (gif.alliance === this.state.filter || this.state.filter === "none")  
                  return (            
            <Col sm={6} md={4} lg={4}>
            <Tile 
              key = {item.id}
              id = {item.id}
              image = {item.images.original.url}
              bitly = {item.bitly_url}
              rating = {item.rating}
              title = {item.title}
              source = {item.source_post_url}
              // name = {airline.name}
              // alliance = {airline.alliance}
              // phone = {airline.phone}
              // site = {airline.site}
            />
         </Col>         
        );


  
        }
        
      )
  

    
  return ( 
   
    <>    
        <Container>
        <Heading />
        <Filter 
        handleCheckbox = {this.handleCheckbox}
        />
        <Row>
          {/* {console.log(this.state)} */}
         {filterList}
        </Row>
      </Container>
    </>
    );
  }
}
export default Main;