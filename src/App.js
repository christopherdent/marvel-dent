import React from 'react';
import fetchJsonp from 'fetch-jsonp'; 

//core container
import Main from "./containers/Main";
 

class App extends React.Component {



  fetchAirlines = () => {
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp"
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json", json);
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

      <Main />


    </div>
    );
  }
}
export default App;
