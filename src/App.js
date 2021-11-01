import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'; 
import Nav from './components/Nav'

//core container
import Main from "./containers/Main";
 
 

class App extends React.Component {
 
   







  render() {
  return (
    <div>
    <Nav />
      <Main/>
    </div>
    );
  }

  
}







export default App;