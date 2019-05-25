import React from 'react';
import { Link } from 'react-router-dom'

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
            <h1>
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

              <Link to="/SignInShop">
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