import React, { Component } from 'react';
// import Home from "./components/Home.js";
import Signincustomer from "./Signincustomer.js";
// import SignUpShop from './components/SignUpShop';
// import SignInShop from './components/SignInShop';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
//  import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox,Form } from 'react-bootstrap'

class Signupcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }

    }

    changed(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    post(){
        const data = this.state
        fetch('/signup', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
    }
 
    render() {

        return (
            <div>
                <input type="text" name="firstName" placeholder="Enter Your FirstName" value={this.state.firstNames} onChange={this.changed.bind(this)} />
                <input type="text" name="lasttName" placeholder="Enter Your LastName" value={this.state.lastNames} onChange={this.changed.bind(this)} />
                <input type="text" name="email" placeholder="Enter Your email" value={this.state.emails} onChange={this.changed.bind(this)} />
                <input type="password" name="password" placeholder="Enter Your Password" value={this.state.passwords} onChange={this.changed.bind(this)} />
                <button onClick={this.post.bind(this)}> Submit</button>
            </div>



        )
    }


}

export default Signupcustomer;