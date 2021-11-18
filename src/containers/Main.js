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
      comics: [],
      filter : 'squirell'
    
      
  }
} 


    configObj = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
  
 
  
    fetchComics = (query = this.state.filter) => {

      const publicKey = '8ba20045db37b24d33e34f26c4be8257'
      const hash = '4c2e71d472bde5cbb7bc4a17eac68621'        
      const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&limit=100`


    fetch(url, this.configObj)
        

      .then(res => res.json())
      .then(({data}) => {
        console.log(data.results)
        
        this.setState({ comics : data.results })
      })
  }



    componentDidMount(){
      this.fetchComics()
       
    }

    handleCheckbox = e => {
      if (e.target.value === "All") this.setState({ filter: "none" });
      else this.setState({ filter: e.target.value });
    };
    

  
  //<img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg">//
//comic.creators.items.forEach{creator => creator.name}
  render(){   
      
  
 
      const filterList = this.state.comics.map(comic => {  
          
    
        // if (gif.alliance === this.state.filter || this.state.filter === "none") 
        
        if (comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
        return (  
          <Col sm={6} md={4} lg={4}>
           <Tile 
            key = {comic.id}      
            title = {comic.title}       
            image = { comic.thumbnail.path + "." + comic.thumbnail.extension }
            creators = { comic.creators.items[0] ? comic.creators.items[0].name + " et al." : null }
            moreinfo = { comic.urls[0].url}
            
             // bitly = {item.bitly_url}
             // rating = {item.rating}
             // title = {item.title}
             // source = {item.source_post_url}
          
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