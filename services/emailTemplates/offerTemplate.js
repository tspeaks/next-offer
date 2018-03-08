const keys = require('../../config/keys');

module.exports = offer => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h2>Don't Miss Out on This Opportunity!</h2>
					<p>${offer.body}</p>
					<div>
						<a href="${keys.redirectDomain}/api/offers/${offer.id}/yes">Accept</a>
					</div>
					<div>
						<a href="${keys.redirectDomain}/api/offers/${offer.id}/no">Decline</a>
					</div>
				</div>
			</body>
		</html>
	`;
};
