import React, { Component } from 'react';

class CustopmerHomepage extends Component {
  render() {
    var shops = [
      "motasem",
      "phoneNumber:0780437773"
      
      
      
    ];

    return (
      <ul>
        {shops.map(shop => <li>{shop}</li>)}
      </ul>
    );
  }
}

export default CustopmerHomepage;