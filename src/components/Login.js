import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Container, Button } from 'react-bootstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: ''
     };
  }

   


handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };


handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    let user = {
      username: username,
      password: password     
    }

    fetch('http://localhost:3000/login', {
      credentials: "include",
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
    })
    .then(response => response.json())  
      .then(resp => {
        // debugger 
        if (resp.logged_in) {
          this.props.handleLogin(resp)
          // this.redirect()
        } else {
          this.setState({errors: resp.data.errors})
        }
      })
      .catch(err => console.log('api error:', err))
    };

      // redirect = () => {
      //     debugger
      //   this.props.history.push('/')
      // }

      handleErrors = () => {
          return (
            <div>
              <ul>
              {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
                })}
              </ul>
            </div>
          )
        };

render() {
    const {username, password} = this.state
    
    return (
      <div>
                <h1>Log In</h1>        
<form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
       
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />         
<button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
         
         </form>

         <h1>  { this.props.logged_in ? `${this.state.username} is now logged in.` : "Logged out."} </h1>

         <Button onClick = {this.props.handleLogout} > Log out? </Button>

        

      </div>
    );
  }
}
export default Login;