import React from 'react';
// import Homepage from './components/Homepage';
import Home from "./components/Home.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }

}

export default App;
