const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
	firstName:   {
		type: String,
		default: ''
	},
	lastName:   {
		type: String,
		default: ''
	},
	admin:   {
		type: Boolean,
		default: false
	}
});

UserSchema.plugin(passportLocalMongoose)

let User = mongoose.model('User',  UserSchema);

module.exports = User;