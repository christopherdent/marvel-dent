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



class Main extends React.Component {

 

  componentDidMount(){        
    this.props.fetchComics()     
  }

  onChange = (e) => {         
     this.setState({
      filter: e.target.value
      })
      this.props.searchComics(`&titleStartsWith=${this.state.filter}`)
  }

  onSearchClick = (e) => {
    e.preventDefault();        
   this.props.searchComics(`&titleStartsWith=${this.state.filter}`)
   }

   onAdvancedSubmit = (e) => {
     console.log("Advanced Search Engaged!")
   }
   

  
   
   render(){   
         
    
              
      return ( 
        
          <Container>

              <SearchBar
              // onChange = {this.onChange}
              // onSearchClick = {this.onSearchClick}  
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

export default connect(mapStateToProps, {fetchComics, searchComics})(Main)

 