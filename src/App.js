import React from 'react' 
import {
  BrowserRouter,
  Routes,
  Route  
} from "react-router-dom";
import {connect} from 'react-redux'
import { createMemoryHistory } from 'history';

//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
import Heading from './components/Heading';
import Login from './components/Login'
import Signup from './components/Signup'

import {fetchComics} from './actions/fetchComics'
import {searchComics} from './actions/searchComics'



class App extends React.Component {
  constructor(props) {
    super(props);
 
  };


  history = createMemoryHistory(); 
   

 


 render() {
  return (


    <div>
      
      <Nav />  
      <Heading />
      <div className='wrapper'>


        <BrowserRouter> 

          <Routes>
          <Route exact path="/" element={<Main />} />   

            <Route exact path="/marvel-dent" element={<Main />} />

            <Route exact path='/login' element={<Login 
                                                  handleLogin={this.handleLogin} 
                                                  handleLogout={this.handleLogout}
                                                  history = {this.history}
                                                  
                                                    />
                                                  }  
                                                />

            <Route exact path='/signup' element={<Signup
                                                   history = {this.history} 
                                                            />
                                                            }
                                                          />

          </Routes>
        </BrowserRouter>
        </div>
      </div>

    );
  }
}

 
export default connect(null)(App);

