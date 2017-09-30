import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {incentiveContract} from './EthereumSetup';
import Owner from './Owner';
import Status from './Status';
import Oracle from './Oracle';
import Receiver from './Receiver';
import Donor from './Donor';

class App extends Component {

	constructor(props) {
		super(props)
	}


  render() {
    return (
      <div className="App">
        	<Owner />
	    	<Status />
	    	<Oracle />
	    	<Receiver />
	    	<Donor />
	</div>
    );
  }
}

export default App;
