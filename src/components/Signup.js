/*eslint-disable*/

import React from "react";
import {Link} from 'react-router-dom'
 
import { Navbar, Container, Button } from 'react-bootstrap';
import Login from './Login'


class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      password_confirmation: '',
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

      const {username, password, password_confirmation} = this.state 


        let user = {
          username: username,
          password: password,
          password_confirmation: password_confirmation
        }



      //   fetch('http://localhost:3000/users', {
      //       credentials: "include",
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json"
      //       },
      //       body: JSON.stringify({user})
      //     })
      //   .then(resp => {
            
      //     if (resp.formData.status === 'created') {
      //       this.props.handleLogin(response.data)
      //       this.redirect()
      //     } else {
      //       debugger 
      //       this.setState({
      //         errors: resp.data.errors
      //       })
      //     }
      //   })
      //   .catch(error => console.log('api errors:', error))
      // };
      fetch('http://localhost:3000/users', {
        credentials: "include",
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user}),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.redirect()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    }
      redirect = () => {
            
        this.props.history.push('/')
      }

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
  const {username, password, password_confirmation} = this.state
  
  return (
    <>

<h1>Sign Up</h1>        
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
          <div>
            or <Link to='/login'>login</Link>
          </div>
        </form>


    </>
       
    );
  };
};

export default Signup;