import React from 'react'
// import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
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
// });


class SignUpShop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle1: false,
      shopname: "",
      shoplocation: "",
      workkinghour: "",
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
    fetch('http://localhost:3500/SignUpShop', {
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
      <div className="form-style-7">

        <form >
          <body> <center>




            <input
              id="filled-search"
              label="shopname"

              type="text"
              placeholder="Shopname"
              // className={classes.textField}
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="shopname"
            />
            <br />
      
            <input
              id="filled-search"
              label="shoplocation"

              type="text"
              placeholder="Shoplocation"
              // className={classes.textField}
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="shoplocation"
            />

            <br />


            <input
               id="filled-search"
              label="workkinghour"
              // className={classes.textField}
              type="text"
              placeholder="Working-Hour"
              name="workkinghour"
              autoComplete="workkinghour"
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}

            />


            <br />


            <input
            id="filled-search"
              label="phoneNumber"
              // className={classes.textField}
              type="text"
              placeholder="PhoneNumber"
              // autoComplete="current-phoneNumber"
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="phoneNumber"

            />
          



            <br />


            <button   type="submit" onClick={(event) => this.click(event)} >sign Up</button>


          </center>
          </body>
        </form>
      </div>
    )
  }
}

export default SignUpShop;