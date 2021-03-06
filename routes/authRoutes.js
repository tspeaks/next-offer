const passport = require("passport");

module.exports = app => {
	//Auth Route Handlers
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/offers");
		}
	);

	//Logout
	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	//Current User
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
