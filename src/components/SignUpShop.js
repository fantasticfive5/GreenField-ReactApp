/* eslint-disable no-labels */
import React from 'react'
import $ from 'jquery';
// import { BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  // import PropTypes from 'prop-types';
  // import MenuItem from '@material-ui/core/MenuItem';
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







 class  SignUpShop extends React.Component {
    
        constructor(props){
            super(props);

            this.state = {
                toggle1: false,
               
                    firstName : "",
                    lastName : "",
                    email : " ",
                    password : ""
                
               


            };
            this.handleChange = this.handleChange.bind(this);
        }

        
        
        
        handleChange(e) {
            console.log(e.target.value);
            this.setState({[e.target.name] : e.target.value});
        }
        
        click(event) {
            
            // eslint-disable-next-line no-unused-expressions
            // toggle1:true;
            event.preventDefault();
            console.log(this.state); // var that = this;
            
            $.ajax({
                type: 'POST',
                url: '/SignUp',
                data: this.state,
                dataType: 'json'
            });
            console.log(this.state);
        }
        
        
        
            render(){
                const { classes } = this.props;
                return (
                    <div>
        
            <form>
              <body><center>
            
               

                
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
                </center>
                </body>
           </form>
        </div>
    )
}
}

export default withStyles(styles)(SignUpShop);