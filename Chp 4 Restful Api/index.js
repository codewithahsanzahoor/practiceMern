const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express(); //? server started
server.use(express.json());

//? API - ENDPOINT - ROUTE
//Create Post /products							C R U D
server.post("/products", (req, res) => {
	console.log(req.body);
	products.push(req.body);
	res.status(201).json(req.body);
});

//Read Get
server.get("/products", (req, res) => {
	res.json(products);
});

//Read Get /products/:id
server.get("/products/:id", (req, res) => {
	const id = +req.params.id; // + is used to convert a string into number.
	const product = products.find((p) => {
		return p.id === id;
	});
	res.json(product);
});

// Update PUT(delete all old data and then inserts new data) /products/:id => we need param id because we need to change a specific thing
server.put("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => {
		return p.id === id;
	});
	products.splice(productIndex, 1, { ...req.body, id: id });
	res.status(201).json({ product: "updated" });
});

// Update PATCH(update's only the patch part of data and remaining data remains in file) /products/:id => we need param id because we need to change a specific thing
server.patch("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => {
		return p.id === id;
	});
	const product = products[productIndex];
	products.splice(productIndex, 1, { ...product, ...req.body });
	res.status(201).json({ product: "patch updated" });
});

// Delete DELETE /products/:id => we need param id because we need to change a specific thing
server.delete("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => {
		return p.id === id;
	});
	const product = products[productIndex];
	products.splice(productIndex, 1);
	res.status(201).json(product);
});

server.listen(8000, () => {
	console.log("server started");
});
