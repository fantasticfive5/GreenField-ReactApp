import React, { Component } from 'react';

class CustopmerHomepage extends Component {
  render() {
    var shops = [
      "motasem",
      "phoneNumber:0780437773"
      
      
      
    ];

    return (
        <div className="form-style-10">
      <ul>
        {shops.map(shop => <li>{shop}</li>)}
      </ul>
      </div>
    );
  }
}

export default CustopmerHomepage;