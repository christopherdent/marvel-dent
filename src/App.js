import React from 'react' 
import { Switch, Route } from 'react-router-dom'
//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
 
 

class App extends React.Component {
 render() {
  return (
    <div>

      
      <Nav />
      <Switch>
        <Route exact path = '/'><Main/></Route>
      </Switch> 
    </div>
    );
  }
}

export default App;