import React, { Component } from "react";

class InformationShop extends Component {
    constructor(props) {
        this.state = {
            shopname: "",
            shoplocation: "",
            workkinghour: {date: new Date()},
            specialties: "",
            phoneNumber: ""
            //  isloading : true
        }
    }
   ShowShop() {
       fetch(("/"),{
        method:"get"
       }).then((response)=>{
           return response.json();
       }).then((response)=>{
          return this.setState({shopname:'' , shoplocation:'' , workkinghour : '' , specialties :'' , phoneNumber: ''})
           
       })
     
    

    }
    render(){
        return (
          <div className="App">
            <header className="App-header">
             
                ? < ShowShop shopname={this.state.shopname} 
                          shoplocation={this.state.shoplocation} 
                          shoplocation={this.state.workkinghour}
                          shoplocation={this.state.specialties}
                          shoplocation={this.state.phoneNumber}
                          onChange={event => this.onChange(event)} 
                          signUp={() => this.signUp()}
                          redirect={(whatPageToShow) => this.redirect(whatPageToShow)} />
              
                   

             
            </header>
          </div>
        );
      }

}



   


export default InformationShop;