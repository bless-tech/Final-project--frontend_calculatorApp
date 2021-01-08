import React from 'react'
//import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import NavBar from './NavBar'
import Main from './Main'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>

    <Route exact path='/' component={Login}/>
    <Route exact path='/Signup' component={Signup}/>
    <Route exact path='/main' component={Main}/>
    
    </Switch>
    </Router>
    </div>
  );
}

export default App;


