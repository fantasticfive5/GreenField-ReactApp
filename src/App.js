import React from 'react';
import './App.css';
import Home from "./components/Home.js";
import Signincustomer from "./components/Signincustomer";
import SignUpCustomer from "./components/SignUpCustomer";
import SignUpShop from './components/SignUpShop';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import SignInShop from './components/SignInShop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    } 
  }

  render() {
    return (
      
      <form><center>
        <Router >    
            <Link to="/Home">
              <button>
                Home
              </button>
            </Link> 
        
          <Route path="/Home" component={Home} />
          <Route path="/SignInCustomer" component={Signincustomer} />
          <Route path="/SignUpCustomer" component={SignUpCustomer} />
          <Route path="/SignUpShop" component={SignUpShop} />
          <Route path="/CustopmerHomepage" component={CustopmerHomepage} />
          <Route path="/CustopmerHomepage" component={CustopmerHomepage} />
        </Router>
        </center>
     </form>
    );
  }
}

export default App;



// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import $ from 'jquery';
// // import Popper from 'popper.js';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import $ from 'jquery';
// // import Homepage from './components/Homepage';
// import Home from "./components/Home.js";
// import Signincustomer from "./components/Signincustomer";
// import SignUpCustomer from "./components/SignUpCustomer";
// import SignUpShop from './components/SignUpShop';
// import SignInShop from './components/SignInShop';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// // import Navbar from "bootstrap";
// // , Switch, Redirect 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       repos: []

//     }
//   }

//   render() {
//     return (

//         <Router>


//             <Link to="/Home">
//               <button>
//                 Home
//               </button>
//             </Link> 

//           <Route path="/Home" component={Home} />
//           <Route path="/SignInCustomer" component={Signincustomer} />
//           <Route path="/SignUpCustomer" component={SignUpCustomer} />
//           <Route path="/SignInShop" component={SignInShop} />
//           <Route path="/SignUpShop" component={SignUpShop} />
//         </Router>

//     );
//   }
  // updateState(data) {
  //   this.setState({
  //     repos: data
  //   })
  // }
  //   render() {
  //     return (
  //     <div className="App">

  //      <Router>


  //       <nav className="navbar navbar-default navbar-static-top">
  //     <div className="container" >
  //           <ul>
  //           <li  className="collapse navbar-collapse"><Link to="/signUp">SignUp</Link></li>
  //           <li><Link to="/signIn">SignIn</Link></li>
  //           <li><Link to="/Home">Home</Link></li>
  //          </ul>
  //     </div>
  //     </nav>


  //           <hr/>

  //           <Route path="/signIn" component={SignInShop} />
  //           <Route path="/signUp" component = {SignUpShop} />
  //           <Route path="/Home" component = {Homepage} />

  //     </Router>
  //           </div>

  //   );
  // }

// }

// export default App;
