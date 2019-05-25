import React from 'react'
import { Link } from '@material-ui/core';
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


class SignUpShop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle1: false,
      shopname: "",
      shoplocation: "",
      workkinghour: " ",
      specialties: "",
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  click(event) {


    event.preventDefault();
    const data = this.state
    event.preventDefault();
    fetch('/signupshop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(state => this.setState(state));

    console.log(this.state);

  }
  render() {
    const { classes } = this.props;
    return (
      <div className="form-style-10">

        <form >
          <body><center>




            <TextField
              id="filled-search"
              label="shopname"

              type="text"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onChange={this.handleChange}
              name="shopname"
            />
            <br />
      
            <TextField
              id="filled-search"
              label="shoplocation"

              type="text"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onChange={this.handleChange}
              name="shoplocation"
            />

            <br />


            <TextField
              id="filled-workkinghour-input"
              label="workkinghour"
              className={classes.textField}
              type="workkinghour"
              name="workkinghour"
              autoComplete="workkinghour"
              margin="normal"
              variant="filled"
              onChange={this.handleChange}

            />


            <br />


            <TextField
              id="filled-phoneNumber-input"
              label="phoneNumber"
              className={classes.textField}
              type="phoneNumber"
              autoComplete="current-phoneNumber"
              margin="normal"
              variant="filled"
              onChange={this.handleChange}
              name="phoneNumber"

            />
          



            <br />


            <Link to="/CustopmerHomepage">

              <button onClick={(event) => this.click(event)} >
                sign Up
              </button>
            </Link>
            <Button variant="contained" color="primary" type="submit" onClick={(event) => this.click(event)} >sign Up</Button>


          </center>
          </body>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(SignUpShop);