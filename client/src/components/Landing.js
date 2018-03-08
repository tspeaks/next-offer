import React from "react";

const Landing = () => {
	return (
		<div className="card blue-grey" style={{ opacity: "0.9" }}>
			<div className="card-content">
				<div style={{ textAlign: "center" }}>
					<h2 className="white-text">Welcome to NextOffer!</h2>
					<p className="white-text">
					<h5>NextOffer is a utility for reaching out to prior customers
					with new and exciting offers.</h5>
					<br />
					</p>
					</div>
					<div style={{ textAlign: "left" }}>
					<p className="white-text">
					<h5 style={{ margin: "0 10px" }}>How to use NextOffer:</h5>
					<br />
					<br />
					1. Click "Login with Google" and enter:<br />
					username: "nextoffer2018", password: "nextoffer"
					<br />
					<br />
					2. Click the "Add Credits" button.  In a live version of the app
					you would enter your credit card information to purchase credits.
					These credits are in turn used to send emails, one credit for one
					email.  For now you can use dummy credit card information.  Use the credit
					card number "4242 4242 4242 4242" and a valid expiration date.
					<br />
					<br />
					3. Click the "+" button to create a new email offer.  This offer can be sent
					to as many recipients as you would like provided you have enough credits to send 
					them.  Keep in mind that recipients will be asked if they would like
					to take advantage of your offer, so form an offer that will entice them to participate!
					<br />
					<br />
					4.  Review your offer.  You can always go back and make changes if you want to reword anything.
					<br />
					<br />
					5. Send your offer.  You will be returned to the dashboard where you can track the success
					 of your offers with the built-in reporting.  This feedback is crucial to use for improving future offers!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
