import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Navbar color={'dark'} dark>
				<Link to="/">Synoyms Dictionary App</Link>
			</Navbar>
		);
	}
}

export default Header;
