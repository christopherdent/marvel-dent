import React from 'react' 

//core containers
import Nav from './components/Nav'
import Main from "./containers/Main";
 
 

class App extends React.Component {
 render() {
  return (
    <div>
      <Nav />
      <Main/>
    </div>
    );
  }
}

export default App;