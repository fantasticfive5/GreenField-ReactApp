import React, { Component } from 'react';
// import { Link } from '@material-ui/core';
import { Link} from 'react-router-dom';


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
      username: "",
      password: ""
    });
  }
  render() {
    return (
      <center>
        <div className="App">
          hiii customer
          <h1>
            Sign In Please
          </h1>
          Email   <input type='text' placeholder='Enter your email' value={this.props.email} name="email" required /><br></br>
          Password <input type='password' placeholder='password' value={this.props.password} name="password" required /><br></br>
          <button onClick={() => this.props.signIn()}> Show Shops</button><br></br>
          <p>
            If you don't have an account <br>
            </br>
            please <Link to="/Signupcustomer">Signup </Link>
          </p>
        </div></center>
    );
  }

}

export default Signincustomer;
