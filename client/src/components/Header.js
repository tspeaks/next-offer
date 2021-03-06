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
					<li>
						<a id="login" href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="2" style={{ margin: "0 10px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav style={{ opacity: "0.9" }}>
				<div className="nav-wrapper teal lighten-1">
					<Link
						to={this.props.auth ? "/offers" : "/"}
						className="left brand-logo" style={{ margin: "0 10px" }}
					>
						NextOffer
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
