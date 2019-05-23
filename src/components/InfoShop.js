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
   ShowShow() {
       fetch("/"),{
        method:"get"
       }).then((response)=>{
           return response.json();
       }).then((body)=>{
           if(body.error){
               return this.setState({errorMassage:error.body}) 
           }
               return this.setState({shopname:shopname , shoplocation:})
           
       })
     
    

    }
    render(){
        return
    }

    
}



   


export default InformationShop;