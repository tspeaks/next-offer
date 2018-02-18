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
					<a href="/auth/google">
						<button
							className="btn btn-light"
							style={{ color: "#577c7f" }}
						>
							Login with Google
						</button>
					</a>
				);
			default:
				return [
					<a key="1" role="button">
						<Payments />
					</a>,
					<span
						key="2"
						className="navbar-text px-2"
						style={{ color: "#577c7f" }}
					>
						Credits: {this.props.auth.credits}
					</span>,
					<a key="3" href="/api/logout">
						<button
							className="btn btn-light"
							style={{ color: "#577c7f" }}
						>
							Logout
						</button>
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
