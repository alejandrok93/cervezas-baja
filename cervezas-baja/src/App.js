import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InstantSearch } from 'react-instantsearch-dom';
import Search from './components/Search';

class App extends Component {
	render() {
		return (
			<div className="App">
				<InstantSearch
					appId="4HCDOCUULH"
					apiKey="9dfaa71a5e8fe2d4bac268102b1c04fd"
					indexName="beers"
				>
					<h1>Cervezas Baja</h1>
					<Search />
				</InstantSearch>
			</div>
		);
	}
}

export default App;
