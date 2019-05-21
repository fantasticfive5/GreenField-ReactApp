/* eslint-disable no-labels */
import React from 'react'
import $ from 'jquery';
import { BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import PropTypes from 'prop-types';
  import MenuItem from '@material-ui/core/MenuItem';


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
            toggle1:true;
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
                const { title } = this.state
                return (
                    <div>
        
            <form>

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

                
                <label htmlFor="firstName">FirstName</label>
                <input  
                type ="text"
                className = ""
                placeholder = "First Name"
                name = "firstName"
               
                onChange = {this.handleChange}

                />

                <br/><br/>
               

               
                <label htmlFor="lastName">LastName</label>
                <input  
                type ="text"
                className = ""
                placeholder = "LastName"
                name = "lastName"
               
                onChange = {this.handleChange}

                />

                <br/><br/>
               

           
            <label htmlFor="email">Email :</label>
                <input  
                type ="text"
                className = ""
                placeholder = "Yazan@example.com"
                name = "email"
                
                onChange = {this.handleChange}

                />
               <br/><br/>

           
            <label htmlFor="password">Password :</label>
                <input  
                type ="password"
                className = ""
                placeholder = "Enter Your Password"
                name = "password"
                
                onChange = {this.handleChange}

                />

                <br/><br/>

                
                

                <Button variant="contained" color="primary" type="submit" onClick={(event) => this.click(event)} >Submit</Button>
           </form>
        </div>
    )
}
}

export default SignUpShop;