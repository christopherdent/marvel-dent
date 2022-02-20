/*eslint-disable*/

import React, { useState, useEffect } from 'react'
 
import ComicsList from '../components/ComicsList'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchBar from '../components/Search';
import { trackPromise } from 'react-promise-tracker';
import Loader from "react-loader-spinner";
//Redux
import {connect} from 'react-redux'
import {fetchComics} from '../actions/fetchComics'
import {searchComics} from '../actions/searchComics'
import {liveSearchComics} from '../actions/liveSearchComics'


class Main extends React.Component {
  constructor(props) {
    super(props);
  
  };
 

  componentDidMount(){        
    this.props.fetchComics()     
  }

  onSearchChange = (e) => {  

    
    const search = document.querySelector("#header-search")
    if(search.value !== ''){
        this.props.liveSearchComics(`&titleStartsWith=${search.value}`)
    }

  }

  onSearchClick = (e) => {
    e.preventDefault();
              
      const search = document.querySelector("#header-search")
       
  //  this.props.searchComics(`&titleStartsWith=${this.state.filter}`)
      this.props.searchComics(`&titleStartsWith=${search.value}`)
   }

   onAdvancedSubmit = (e) => {
     console.log("Advanced Search Engaged!")
   }
   

  
   
   render(){   
         
    
              
      return ( 
        
          <Container>

              <SearchBar
              onChange = {this.onSearchChange}
              onSearchClick = {this.onSearchClick}  
              // term = {this.state.filter}
              // onAdvancedSubmit = {this.onAdvancedSubmit}
              /> 
          
            <Row>

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

 