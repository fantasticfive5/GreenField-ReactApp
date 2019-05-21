import React from 'react';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

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


    click(event) {

        // eslint-disable-next-line no-unused-expressions
        toggle1:true;
        event.preventDefault();
        console.log(this.state); // var that = this;
    
        $.ajax({
          type: 'POST',
          url: '/SignIn',
          data: this.state,
          dataType: 'json'
        });
        console.log(this.state);
      }


    render(){
        return(
            <div>
               <form>
                
                <label htmlFor="username">FirstName</label>
                <input  
                type ="text"
                className = ""
                placeholder = "Enter Your User Name"
                name = "username"
               
                onChange = {this.handleChange}

                />

                <br/><br/>
               

               
                <label htmlFor="password">LastName</label>
                <input  
                type ="text"
                className = ""
                placeholder = "Enter Your Password"
                name = "password"
               
                onChange = {this.handleChange}

                />
                <button type="submit" onClick={(event) => this.click(event)} >Submit</button>
                </form>
            </div>
        )
    }


}


export default SignInShop;