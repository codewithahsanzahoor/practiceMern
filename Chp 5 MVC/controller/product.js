// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const { default: mongoose } = require("mongoose");
const model = require("../model/product");
const Product = model.Product;

//CREATE
const create = async (req, res) => {
	// products.push(req.body);
	const product = new Product(req.body);
	// product.title = "PhoneX";
	// product.price = 9999;
	// product.rating = 4;
	const save = await product.save();
	// console.log(save);

	res.status(201).json(save);
};

//READ 1
const getAll = async (req, res) => {
	const products = await Product.find();
	res.json(products);
};

//READ 2
const get = async (req, res) => {
	const id = req.params.id; // + is used to convert a string into number.
	// console.log(id);
	const product = await Product.findById(id);
	res.json(product);
};

// Update (Replace)
const replace = async (req, res) => {
	const id = req.params.id;
	// const productIndex = products.findIndex((p) => {
	// 	return p.id === id;
	// });
	// products.splice(productIndex, 1, { ...req.body, id: id });

	try {
		const replaceProduct = await Product.findOneAndReplace(
			{ _id: id },
			req.body,
			{ new: true }
		);
		res.status(201).json(replaceProduct);
	} catch (err) {
		res.status(201).json(err);
	}
};

// Update (Patch)
const update = async (req, res) => {
	const id = req.params.id;
	// const productIndex = products.findIndex((p) => {
	// 	return p.id === id;
	// });
	// const product = products[productIndex];
	// products.splice(productIndex, 1, { ...product, ...req.body });
	// res.status(201).json({ product: "patch updated" });
	try {
		const updateProduct = await Product.findOneAndUpdate(
			{ _id: id },
			req.body,
			{ new: true }
		);
		res.status(201).json(updateProduct);
	} catch (err) {
		res.status(201).json(err);
	}
};

// delete particular object
const deletee = async (req, res) => {
	const id = req.params.id;
	const productIndex = products.findIndex((p) => {
		return p.id === id;
	});
	const product = products[productIndex];
	products.splice(productIndex, 1);
	res.status(201).json(product);
};

module.exports = {
	createProduct: create,
	getProduct: get,
	getAllProducts: getAll,
	updateProduct: update,
	replaceProduct: replace,
	deleteProduct: deletee,
};
