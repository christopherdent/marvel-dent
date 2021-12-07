import React from 'react' 
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
import Heading from './components/Heading';
 

class App extends React.Component {

  componentDidMount(){
    // document.getElementById('main-heading').click();
  }



 render() {
  return (
    <div>
      <Nav />  
        <Heading />
      <Main />
        

    {/* <Router>
        
   
 
        <Routes>
         
          <Route exact path='/' component={Main} />
        
        </Routes>
    
   
  </Router> */}
  </div>

    );
  }
}

export default App;