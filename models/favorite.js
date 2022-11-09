const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const FavoriteSchema = new Schema({
	dish: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
});



let Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;