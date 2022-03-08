/*eslint-disable*/

import React, { useState, useEffect } from 'react'
 
import ComicsList from '../components/ComicsList'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchBar from '../components/Search';
import { trackPromise } from 'react-promise-tracker';
 
import LoadingIndicator from '../components/LoadingIndicator'

//Redux
import {connect} from 'react-redux'
import {fetchComics} from '../actions/fetchComics'
import {searchComics} from '../actions/searchComics'
import {liveSearchComics} from '../actions/liveSearchComics'
 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  };


  

  componentDidMount(){   
    trackPromise(
    this.props.fetchComics()    
    ) 
  }

  onSearchChange = (term) => {     
    const search = document.querySelector("#term")
     
    this.setState({term: search.value})
    // if (search.value.match(regex)) {
    //     this.props.liveSearchComics(`&titleStartsWith=${search.value}`)
    // }

  }

  onSearchClick = (term) => {     
    trackPromise(      
      this.props.searchComics(`&titleStartsWith=${term}`)
    )
   }


   onAdvancedSubmit = (e) => {
     console.log("Advanced Search Engaged!")
   }
    
   
   render(){              
      return ( 
        
      <Container>

        <SearchBar              
          onSearchClick = {this.onSearchClick}  
          onSearchChange = {this.onSearchChange}
          term = {this.state.term}
          // onAdvancedSubmit = {this.onAdvancedSubmit}
        /> 
          
        <Row>
        <LoadingIndicator /> 
              < ComicsList 
                comics = { this.props.comics }
              />
            
            </Row>
            
          </Container>
       
        );
      }
    }

    function mapStateToProps(state) {
      return {
        comics: state.comics
         
      }
    }

export default connect(mapStateToProps, {fetchComics, searchComics, liveSearchComics})(Main)

 