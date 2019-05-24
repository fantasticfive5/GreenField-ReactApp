import React, { Component } from 'react';

class CustopmerHomepage extends Component {
  render() {
    var shops = [
      "motasem","raggad"
      
    ];

    return (
      <ul>
        {shops.map(shop => <li>{shop}</li>)}
      </ul>
    );
  }
}

export default CustopmerHomepage;