import React, { Component } from 'react';
import { BrowserRouter as 
  // Router, 
  // Route, 
  Link, 
  // Switch, 
  // Redirect 
} from 'react-router-dom';
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

  post(event) {
    const data = this.state
    event.preventDefault();
    fetch('/signupuser', {
      method: 'post',
      body: JSON.stringify(data),

      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(state => this.setState(state));
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
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
            onChange={this.handleChange}
            name="firstName"
          />
          <br />

          <TextField
            id="filled-search"
            label="Last Name"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            name="lastName"
          />

          <br />
          <TextField
            id="filled-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            onChange={this.handleChange}

          />

          <br />
          <TextField
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            name="password"
          />

          <br /><Link to="/Signincustomer">
            <Button variant="contained" color="primary" type="submit" onClick={(event) => this.click(event)} > Submit</Button>
          </Link></body>
        </form>
      </div>
    )
  }
}
export default withStyles(styles)(Signupcustomer);
