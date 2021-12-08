import React from 'react' 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 

//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
import Heading from './components/Heading';


class App extends React.Component {

  componentDidMount(){
    
  }



 render() {
  return (
    <div>
      <Nav />  
      <Heading />
      <div className='wrapper'>
        <Router>        
          <Routes>
          <Route exact path='/marvel-dent' component={Main} />
          <Route exact path='/' component={Main} />
          </Routes>
        </Router>
        </div>
      </div>

    );
  }
}

export default App;