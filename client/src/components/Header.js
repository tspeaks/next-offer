import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a
						href="/auth/google"
						className="btn btn-secondary"
						role="button"
					>
						Login with Google
					</a>
				);
			default:
				return [
					<div key="1">
						<Payments />
					</div>,

					<a
						key="2"
						href="/api/logout"
						className="btn btn-secondary"
						role="button"
					>
						Logout
					</a>
				];
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link
					to={this.props.auth ? "/offers" : "/"}
					className="navbar-brand"
				>
					NextOffer
				</Link>
				<div className="btn-group right" role="group">
					{this.renderContent()}
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
