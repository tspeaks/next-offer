const keys = require('../../config/keys');

module.exports = offer => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h2>Don't Miss Out on This Opportunity!</h2>
					<p>${offer.body}</p>
					<p>Would you like more information on how to take advantage of this offer?</p>
					<div>
						<a href="${keys.redirectDomain}/api/offers/${offer.id}/yes">Yes</a>
					</div>
					<div>
						<a href="${keys.redirectDomain}/api/offers/${offer.id}/no">No</a>
					</div>
				</div>
			</body>
		</html>
	`;
};
