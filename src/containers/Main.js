/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import Tile from '../components/Tile'
import Heading from '../components/Heading'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Filter from '../components/Filter';
import SearchBar from '../components/Search';
import { trackPromise } from 'react-promise-tracker';
import Loader from "react-loader-spinner";



class Main extends React.Component {

  constructor() {
    super();    
    this.state = {
      comics: [],
      filter : null
    
      
  }
} 

      onChange = (e) => {         
      this.setState({
        filter: e.target.value
        })
  }

  onClick = (e) => {
    e.preventDefault();
   this.fetchComics(`&titleStartsWith=${this.state.filter}`)
   }

    configObj = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
  
   
    fetchComics = (query) => {

      const publicKey = '8ba20045db37b24d33e34f26c4be8257'
      const hash = '4c2e71d472bde5cbb7bc4a17eac68621'        
      const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&limit=100` + query;

      trackPromise(
         
      fetch(url, this.configObj)
          .then(res => res.json())
      .then(({data}) => {
        console.log(data.results)        
        this.setState({ comics : data.results })
      })
    )
  }



    componentDidMount(){
      this.fetchComics()
       
    }

    handleCheckbox = e => {
      if (e.target.value === "All") this.setState({ filter: "none" });
      else this.setState({ filter: e.target.value });
    };
    

  
  
  render(){   
      
 
 
      const filterList = this.state.comics.map(comic => {  
          
    
        
        
        if (comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        return (  
          <Col sm={6} md={4} lg={4}>
           <Tile 
            key = {comic.id}      
            title = {comic.title}       
            image = { comic.thumbnail.path + "." + comic.thumbnail.extension }
            creators = { comic.creators.items[0] ? comic.creators.items[0].name + " et al." : null }
            moreinfo = { comic.urls[0].url}
    
          
            />
         </Col>         
        );
        } else {
          return (  
          <Col sm={6} md={4} lg={4}>
          <Tile 
           key = {comic.id}      
           title = {comic.title}       
           image = 'https://i5.walmartimages.com/asr/7c39143f-6d73-4f81-8c4e-9418804f47f2_1.0a075aa7294b8a62fe99895a82618550.jpeg'
           creators = { comic.creators.items[0] ? comic.creators.items[0].name + " et al." : null }
           moreinfo = { comic.urls[0].url}
   
         
           />
        </Col>    
        );

        }

  
        }
        
      )
  

    
  return ( 
   
    <>    
        <Container>

          <SearchBar
          onChange = {this.onChange}
          onClick = {this.onClick}  
          term = {this.state.filter}
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