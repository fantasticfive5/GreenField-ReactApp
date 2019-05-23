import React, { Component } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button 
} from '@material-ui/core'
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


class Homepage extends Component {
    constructor(props){
      super(props)
      this.state = {
        
      }
    }
 
  handleChange = ({ target: { name, value } }) =>
  this.setState({
    [name]: value
  })
  render() {
    const { classes } = this.props;

    return (
      <div>
      
      <form>
      <TextField
          id="filled-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />

      </form>




     
      </div>
    )
  }

}

export default withStyles(styles)(Homepage);
