import React from "react";

const Landing = () => {
	return (
		<div className="card blue-grey" style={{ opacity: "0.9" }}>
			<div className="card-content">
				<div style={{ textAlign: "center" }}>
					<h2 className="white-text">Welcome to NextOffer!</h2>
					<p className="white-text">
					<h5>NextOffer is a utility for reaching out to prior customers
					with new and exciting email offers.</h5>

					<br />
					<br />
					Login as "<strong>nextoffer2018</strong>" with password "<strong>nextoffer</strong>".
					<br />
					  Add credits and start sending emails!
					<br />
					<br />
					  <small><i>This is a demo version of NextOffer and does not accept real payments at this time.
					  <br /> Please use fake credit card information.</i></small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
