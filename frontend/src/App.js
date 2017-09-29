import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {incentiveContract} from './EthereumSetup';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			completionStatus: "",
			bounty: "",
		}
	}

	componentWillMount() {
		var bountyVal = incentiveContract.checkBounty();
		var completionVal = incentiveContract.checkStatus();
		this.setState({
			completionStatus: completionVal,
			bounty: parseInt(bountyVal, 10)
		})
	}

  render() {
    return (
      <div className="App">
        <p className="App-intro">
		I would like to say : {this.state.bounty}
        </p>
      </div>
    );
  }
}

export default App;
