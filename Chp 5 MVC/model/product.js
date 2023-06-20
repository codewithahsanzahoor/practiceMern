const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
	title: { type: String, required: true },
	description: String,
	price: { type: Number, required: true, min: [500, "your price is too low!"] },
	discountPercentage: Number,
	rating: Number,
	brand: { type: String, required: true },
	category: String,
	thumbnail: String,
	images: [String],

	// title: String, // String is shorthand for {type: String}
	// author: String,
	// body: String,
	// comments: [{ body: String, date: Date }],
	// date: { type: Date, default: Date.now },
	// hidden: Boolean,
	// meta: {
	// 	votes: Number,
	// 	favs: Number,
	// },
});

exports.Product = mongoose.model("Product", productSchema);
