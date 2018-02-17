import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const NewOffer = () => <h2>NewOffer</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/offers" component={Dashboard} />
					<Route path="/offers/new" component={NewOffer} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
