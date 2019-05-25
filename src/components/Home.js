import React from 'react';
import { Link } from 'react-router-dom'
// import Signincustomer from "./Signincustomer.js";
// import SignInShop from './SignInShop.js';


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

      <form >
        <div className="form-style-10"><center><div>

          <header>
          <Link to="/SignInCustomer">
              <button>
                Login
              </button>
            </Link> 

            <Link to="/SignUpCustomer">
              <button>
                Register an account
              </button>
            </Link> 

            <Link to="/SignUpShop">
              <button>
                Register a shop
              </button>
            </Link> 
            <h1><br></br>
              Welcome to Ma3ak
          </h1>
          
          </header>

        </div>
          <body>
            <div>
              Sign in as a <br></br>
              <Link to="/SignInCustomer">
                <button>
                  Customer
            </button>
          </Link>
          <br></br>

      <Link to="/SignUpShop">
                <button>
                  Shop Owner
            </button>
              </Link>
            </div>
          </body>
        </center>
        </div>
      </form>
    );
  }
}
export default Home;