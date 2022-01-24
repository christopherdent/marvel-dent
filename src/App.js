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
    this.state = { 
      isLoggedIn: false,
      user: {},
      errors: ""
     };
  };


  history = createMemoryHistory(); 
   

 
       

  ///just checks logged in status 
//   loginStatus = () => {
//     fetch('http://localhost:3000/logged_in', {
//       credentials: "include",
//       method: 'GET', 
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })   
//     .then(res => res.json())
//     .then(response => {     
//       if (response.logged_in) {
//         this.handleLogin(response)
//       } else { 
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }

//   handleLogin = (data) => {   
    
//     this.setState({
//       isLoggedIn: data.logged_in,      
//       user: data.user,
//       errors: ""
//     })
//   }

// handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {},
//     errors: ""
//     })
//   }

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
                                                  logged_in = {this.state.isLoggedIn}
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

