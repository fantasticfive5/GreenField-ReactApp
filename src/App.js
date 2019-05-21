import React, { Component } from 'react';
import $ from 'jquery'; 
import Homepage from './components/Homepage';
import SignUpShop from './components/Register/SignUpShop';
import SignInShop from './components/Register/SignInShop';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    repos : []
  }
  }

  updateState(data) {
    this.setState({
      repos: data
    })
  }


  


  render() {
    return (
      
       <Router>
       
        <div className="App">
        <nav className="navbar navbar-default navbar-static-top">
      <div className="container" >
            <ul>
            
            <li  className="collapse navbar-collapse"><Link to="/signUp">SignUp</Link></li>
            <li><Link to="/signIn">SignIn</Link></li>
            <li><Link to="/Home">Home</Link></li>
            
           
          </ul>
      </div>
          </nav>
            <hr/>

            <Route path="/signIn" component={SignInShop} />
            <Route path="/signUp" component = {SignUpShop} />
            <Route path="/Home" component = {Homepage} />

        </div>
      </Router>
        
    );
  }

}

export default App;
