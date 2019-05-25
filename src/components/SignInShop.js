
  // ---------- this page is not used -----------//

import React from 'react';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  // import {
    // Paper,
    // Typography,
    // TextField,
    // Button 
  // } from '@material-ui/core'
  // import { withStyles } from '@material-ui/core/styles';



  // const styles = theme => ({
  //   container: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     marginLeft: theme.spacing.unit,
  //     marginRight: theme.spacing.unit,
  //   },
  //   dense: {
  //     marginTop: 16,
  //   },
  //   menu: {
  //     width: 200,
  //   },
  //   button: {
  //       margin: theme.spacing.unit,
  //     },
  //     input: {
  //       display: 'none',
  //     },
  // });







  class SignInShop extends React.Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {

            username :"",
            password : ""

        }
    }


    handleChange(e) {
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value});
    }

      clicked() {
          this.setState({
            username :"",
            password : ""
          });
      }


    click(event) {

        
        
        event.preventDefault();
        console.log(this.state); // var that = this;
    
        $.ajax({
          type: 'POST',
          url: '/signin ',
          data: this.state,
          dataType: 'json'
        });
        console.log(this.state);
      }


    render(){
        // const { classes } = this.props;

        return(
            <div  className="form-style-10"><center>
               <form > <body>
                
               <input
          id="filled-name1"
          label="username"
          // className={classes.textField}
        //  value={this.clicked}
          onChange={this.handleChange}
          // margin="normal"
          // variant="filled"
          name = "username"
               
        />

                

                <br/>
                <input
          id="filled-password-input"
          label="Password"
          // className={classes.textField}
          type="password"
          // autoComplete="current-password"
          // margin="normal"
          // variant="filled"
          onChange = {this.handleChange}
          name = "password"

             />
              <Link to="/CustopmerHomepage"> 
              <button variant="contained" color="primary" className={classes.button} type="submit" onClick={(event) => this.click(event)} >Sign In</button>

              
              </Link>
                <p>
            If you don't have an account <br>
            </br>
            please <Link to="/SignUpShop">Signup </Link>
          </p>
          </body>
                </form></center>
            </div>
        )
    }


}


export default SignInShop;