import React, { Component } from 'react';
import Layout from './layout/Layout';
import Search from './search/Search';
import NotFound from './NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/browse/:keyword?" component={Search} />
					<Redirect exact from="/" to="/browse" />
					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</Layout>
		);
	}
}

export default App;
