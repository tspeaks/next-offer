import React from "react";

const Landing = () => {
	return (
		<div className="card blue-grey">
			<div className="card-content">
				<div style={{ textAlign: "center" }}>
					<h2 className="white-text">Welcome to NextOffer!</h2>
					<p className="white-text">
					<h5>NextOffer is a utility for reaching out to prior customers
					with new and exciting offers.</h5>
					<br />
					<h5>To use NextOffer:</h5>
					</p>
					</div>
					<div style={{ textAlign: "left" }}>
					<p className="white-text">
					<br />
					<br />
					1. Click "Login with Google" and enter your Google credentials.
					<br />
					<br />
					2. Click the "Add Credits" button.  In a live version of the app
					you would enter your credit card information to purchase credits.
					These credits are in turn used to send emails.  One credit for one
					email.  For now you can use dummy credit card information.  Use a credit
					card number consisting of repeating "42's" and an expiration date some
					point in the future.
					<br />
					<br />
					3. Click the "+" button to create a new email offer.  This offer can be sent
					to as many recipients as you like provided you have enough credits to send 
					them.  Keep in mind that recipients will be asked if they would like
					to take advantage of your offer and form an offer that will entice them to participate!
					<br />
					<br />
					4.  Review your offer.  You can always go back and make changes if you want to reword anything.
					<br />
					<br />
					5. Send you offer.  You will be returned to the dashboard where a synopsis of each offer you've
					sent can be viewed.  Each offer provides tallies of how many have accepted or declined you offer.
					This feedback is crucial to use for sharpening your offer crafting skills!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
