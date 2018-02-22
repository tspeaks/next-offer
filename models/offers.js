const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require("./recipients");

const offerSchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [recipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	dateSent: Date,
	lastResponse: Date
});

mongoose.model("offers", offerSchema);
