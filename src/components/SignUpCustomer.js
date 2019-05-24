import React, { Component } from 'react';
// import Home from "./components/Home.js";
import Signincustomer from "./Signincustomer.js";
// import SignUpShop from './components/SignUpShop';
// import SignInShop from './components/SignInShop';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
//  import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox,Form } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });




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
    // changed(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }  
    post(){
        const data = this.state
        fetch('/signup', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
    }
    handleChange(e) {
            console.log(e.target.value);
            this.setState({[e.target.name] : e.target.value});
        }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <form>  <body>     
<TextField
id="filled-search"
label="First Name"
type="text"
className={classes.textField}
margin="normal"
variant="filled"
onChange = {this.handleChange}
name = "firstName"
/>
<br/>

<TextField
id="filled-search"
label="Last Name"
type="text"
className={classes.textField}
margin="normal"
variant="filled"
onChange = {this.handleChange}
name = "lastName"
/>

<br/>
<TextField
id="filled-email-input"
label="Email"
className={classes.textField}
type="email"
name="email"
autoComplete="email"
margin="normal"
variant="filled"
onChange = {this.handleChange}

/>

<br/>
<TextField
id="filled-password-input"
label="Password"
className={classes.textField}
type="password"
autoComplete="current-password"
margin="normal"
variant="filled"
onChange = {this.handleChange}
name = "password"
/>

<br/>
<Button variant="contained" color="primary" type="submit" onClick={(event) => this.click(event)} >Submit</Button>
</body>
</form>
                {/* <input type="text" name="firstName" placeholder="Enter Your FirstName" value={this.state.firstNames} onChange={this.changed.bind(this)} />
                <input type="text" name="lasttName" placeholder="Enter Your LastName" value={this.state.lastNames} onChange={this.changed.bind(this)} />
                <input type="text" name="email" placeholder="Enter Your email" value={this.state.emails} onChange={this.changed.bind(this)} />
                <input type="password" name="password" placeholder="Enter Your Password" value={this.state.passwords} onChange={this.changed.bind(this)} />
                <button onClick={this.post.bind(this)}> Submit</button> */}
            </div>
        )
    }
}
export default withStyles(styles)(Signupcustomer);
// export default Signupcustomer;