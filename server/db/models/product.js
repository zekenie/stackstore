var mongoose = require('mongoose');
var 

var Schema = mongoose.Schema;

var productSchema = new Schema({
	title: { type: String, unique: true, required: true },
	description: { type: String, min: 10},
	price: { type: Number, required: true },
	categories: [{ type: Schema.Types.Objectid, ref: 'Category' }],
	inventory: Number,
	brand: String,
	photoUrls: [String],
	reviews: [{ type: Schema.Types.Objectid, ref: 'Review' }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

productSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Product', productSchema);