import React, { Component } from 'react';

class CustopmerHomepage extends Component {

  constructor(props){
    super(props)
  
    this.state = {
       shops : [{
        shopname:"motasem",
        phoneNumber : "0780437773" 
       }]
    }
  }
componentWillMount(){
  this.getInfo();
}
  getInfo() {

    // event.preventDefault();

    fetch('http://localhost:3500/getshops', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(newData => {
        console.log(newData)
        this.setState({shops: newData})});

  }
  render() {
    

    return (
        <div className="form-style-10">
      <ul>
        {this.state.shops.map(shop => <li>{shop.shopname }{shop.phoneNumber}</li>)}
      </ul>
      </div>
    );
  }
}

export default CustopmerHomepage;