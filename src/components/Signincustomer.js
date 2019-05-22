import React, { Component } from 'react';

class Signincustomer extends Component {
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password : ""
    }
  }
  sendData() {
    const data = {email: this.state.email, password : this.state.password}
    console.log(data)
  }
  render() {
    return (
      <div className="App">
          hiii customer
          <h1>
            Sign In Please
          </h1>
          Email : <input type='text' placeholder='Enter your email' value={this.props.email}  name="email"/><br></br>
          Password : <input type='password' placeholder='password' value={this.props.password}  name="password"/><br></br>
          <button onClick={() => this.props.signIn()}> Show Shops</button><br></br>
          <p>
            If you don't have an account <br>
            </br>
            please 
          </p>
      </div>
    );
  }

  }

export default Signincustomer;
