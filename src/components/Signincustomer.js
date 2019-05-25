import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import { Link } from '@material-ui/core';

class Signincustomer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  sendData() {
    const data = { email: this.state.email, password: this.state.password }
    console.log(data)
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  clicked() {
    this.setState({
      email: "",
      password: "",
      isEnabled: false
    });
  }

  // getInfo() {

  //   // event.preventDefault();

  //   fetch('http://localhost:3500/getshops', {
  //     method: 'GET',
  //     headers: { "Content-Type": "application/json" }
  //   }).then(response => response.json())
  //     .then(state => {
  //       console.log(state)
  //       this.setState({shops: state.shops})});

  // }


  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
    console.log(this.state.email)
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  render() {
    const { email, password } = this.state;
    var isEnabled = email.length > 0 && password.length > 0;
    return (
      <body>
        <div className="form-style-7" >

       
        
          <center>
            <div className="App">
              <br></br>
              <h4>
                Sign In Please
          </h4>
              Email <input id="rawan" type='text' placeholder='Enter your email' name="email" required onChange={this.handleEmailChange} /><br></br>
              Password <input type='password' placeholder='password' name="password" required onChange={this.handlePasswordChange} /><br></br>
              <br></br>
              <Link to="/CustopmerHomepage"> 
             <button 
              
              onChange={this.handleChange} disabled={!isEnabled}> Show Shops
              
              </button>
              
              </Link>

             




              <br></br>
              
              <p>
                If you don't have an account <br>
                </br>
                please <Link to="/Signupcustomer">Signup </Link>
              </p>
            </div></center>
  
            </div>
<center>
            <div>
              <img src="https://files.slack.com/files-pri/TGEHN6M8Q-FK1VCBDPG/ma3aklogo.png" />
            </div>
  </center>
            </body>
    );
  }
}
export default Signincustomer;
