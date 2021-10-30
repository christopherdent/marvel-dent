import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'; 

//core container
import Main from "./containers/Main";
 
let allAirlines = []

class App extends React.Component {

   

  fetchAirlines = () => {
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp"
    })
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        json.forEach(airline => console.log(JSON.stringify(airline.name)));
        json.forEach(airline => allAirlines.push(airline));
        
        })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
      
    }



componentDidMount(){
  this.fetchAirlines()
  
}


  render() {
  return (
    <div>

          <Main 
          airlines = {allAirlines}
          />


    </div>
    );
  }
}
export default App;
