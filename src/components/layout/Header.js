import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<Navbar color={'dark'} dark>
				<NavbarBrand href="/browse">Synoyms Dictionary App</NavbarBrand>
			</Navbar>
		);
	}
}

export default Header;
