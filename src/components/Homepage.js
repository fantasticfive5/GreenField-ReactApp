import React, { Component } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button 
} from '@material-ui/core'




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
    const { title } = this.state;
    return (
      <div>
      ...
      <form>
        <TextField
          name='title'
          label='Exercise'
          value={title}
          onChange={this.handleChange}
          margin='normal'
        />
      </form>




     
      </div>
    )
  }

}

export default Homepage;
