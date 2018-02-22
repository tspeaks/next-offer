import React from "react";
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<div className="fixed-action-btn">
				<Link to="/offers/new" className="btn-floating btn-large teal lighten-1">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
