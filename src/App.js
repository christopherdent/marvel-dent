import React from 'react' 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import axios from 'axios'
 

//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
import Heading from './components/Heading';
import Login from './components/Login'
import Signup from './components/Signup'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    fetch('http://localhost:3000/logged_in', 
    {withCredentials: true})    
    .then(res => res.json())
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
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

            <Route exact path="/marvel-dent" element={<Main />} />

            <Route exact path='/login' element={<Login />}/>

            <Route exact path='/signup' element={<Signup />}/>

          </Routes>
        </BrowserRouter>
        </div>
      </div>

    );
  }
}

export default App;