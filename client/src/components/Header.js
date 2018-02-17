import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Next Offer</a>
					<div className="btn-group right" role="group" aria-label="Basic example">
					  <button type="button" className="btn btn-secondary btn-light">Login With Google</button>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;