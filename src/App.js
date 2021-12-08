import React from 'react' 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

 

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
        <BrowserRouter>        
          <Routes>
          <Route exact path="/" element={<Main />} />
            
            <Route exact path="marvel-dent/" element={<Main />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>

    );
  }
}

export default App;