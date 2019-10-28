import React, { Component } from 'react';
import Layout from './layout/Layout';
import Search from './search/Search';
import { Route } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/browse/:keyword?" component={Search} />
			</Layout>
		);
	}
}

export default App;
