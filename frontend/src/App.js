import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract} from './EthereumSetup';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			greeting: ""
			blockAddress: "",
		}
	}

	componentWillMount() {
		var data = greeterContract.greet()
		this.setState({
			greeting: String(data)
			blockAddress
		})
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
		I would like to say : {this.state.greeting}
        </p>
      </div>
    );
  }
}

export default App;
