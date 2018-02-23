const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/mailer");
const offerTemplate = require("../services/emailTemplates/offerTemplate");

const Offer = mongoose.model("offers");

module.exports = app => {
	app.get("/api/offers/accept", (req, res) => {
		res.send("Your Discount Voucher is on the way!");
	});

	app.get("/api/offers/decline", (req, res) => {
		res.send(
			"Thanks for using our product, we'll let you know when we have more great offers!"
		);
	});

	app.post('/api/offers/webhooks', (req, res) => {
		console.log(req.body);
		res.send({});
	});

	app.post("/api/offers", requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const offer = new Offer({
			title,
			subject,
			body,
			recipients: recipients
				.split(",")
				.map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		const mailer = new Mailer(offer, offerTemplate(offer));

		try {
			await mailer.send();
			await offer.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
