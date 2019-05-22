import React from 'react';
import Signincustomer from "./Signincustomer.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';




class Home extends React.Component {


  constructor(props) {
    super(props)

    this.clicked = this.clicked.bind(this)

    this.state = {
      customer: false,
      owner: false
    }
  }

  clicked() {
    console.log('hi')
    this.setState({
      customer: !this.state.customer
    })

  }

  render() {
    return (
      <div><center>
        
        <header>
          <h1>
            Hello World !!!!
                      </h1>
        </header><Router><div>
        <button>go
          <oute exact path="/" component={<Signincustomer />}  /> 
        </button></div>
          </Router>

       
        {/* {this.state.customer ? (<Signincustomer />) : <button onClick={this.clicked}> Click Me!</button>} */}
        {/* <button onClick={this.clicked}>
          Click meeeeeee!
        </button> */}
        {/* <button onClick = { this.clicked}>
        Click RBK!
        </button>
        <toggle>
          { <Signincustomer /> }
        </toggle> */}
      </center>
      </div>
    );
  }
}
export default Home;