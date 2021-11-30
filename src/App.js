import React from 'react' 
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
 
 

class App extends React.Component {
 render() {
  return (
    <div>
 <Nav />  
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