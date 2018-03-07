import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import NewOffer from "./offerComponents/NewOffer";
import Background from "./background.jpg";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() { 
		return (
			<div
				style={{
					backgroundImage: `url(${Background})`,
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed"
				}}
			>
				<div className="container">
					<BrowserRouter>
						<div>
							<Header />
							<Route exact path="/" component={Landing} />
							<Route exact path="/offers" component={Dashboard} />
							<Route path="/offers/new" component={NewOffer} />
						</div>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(App);
  