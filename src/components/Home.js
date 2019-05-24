import React from 'react';
// import Signincustomer from "./Signincustomer.js"
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signincustomer from "./Signincustomer.js";
// import SignUpCustomer from "./SignUpCustomer";
// import SignUpShop from './SignUpShop';
import SignInShop from './SignInShop.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// , Switch, Redirect



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
      <form>
      <div><center><div>

        <header>
          <h1>
            Welcome to Ma3ak 
          </h1>
        </header>

        </div>
      <body>
      <div><center> 
        Sign in as a <br></br>
          <Link to="/SignInCustomer">
            <button>
              Customer 
            </button>
          </Link>
          <br></br>
          
          <Link to="/SignInShop">
            <button>
              Shop Owner
            </button>
          </Link>

          {/* <br></br>
          <br></br>
          <br></br> */}

          {/* <Link to="/SignInShop">
            <button>
              Shop Sign In
            </button>
          </Link> */}

          {/* <Route path="/Home" component={Home} /> */}
         
          {/* <Route path="/SignUpCustomer" component={SignUpCustomer} /> */}
          {/* <Route path="/SignInShop" component={SignInShop} />
          <Route path="/SignUpShop" component={SignUpShop} /> */}
       
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
        </body>
      </center>
      </div>
      </form>
    );
  }
}
export default Home;