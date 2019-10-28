import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Navbar color={'dark'} dark>
				<Link to="/">
					<NavbarBrand>Synoyms Dictionary App</NavbarBrand>
				</Link>
			</Navbar>
		);
	}
}

export default Header;
