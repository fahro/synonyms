import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="col-md-12">
				<div className="aa-header-area">
					<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-6">
						<div className="aa-header-left">
						<div className="aa-telephone-no">
							<span className="fa fa-phone"></span>
							1-900-523-3564
						</div>
						<div className="aa-email hidden-xs">
							<span className="fa fa-envelope-o"></span> info@markups.com
						</div>
						</div>              
					</div>
					<div className="col-md-6 col-sm-6 col-xs-6">
						<div className="aa-header-right">
						<a href="register.html" className="aa-register">Register</a>
						<a href="signin.html" className="aa-login">Login</a>
						</div>
					</div>
					</div>
				</div>
        	</div>
		);
	}
}

export default Header;
