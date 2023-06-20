const fs = require("fs");
const express = require("express");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const quotes = data.quotes;

const server = express(); //? server started
server.use(express.json()); //middleware

//? API - ENDPOINT - ROUTE
//Create Post /quotes							C R U D
server.post("/quotes", (req, res) => {
	console.log(req.body);
	quotes.push(req.body);
	res.status(201).json(req.body);
});

//Read Get
server.get("/quotes", (req, res) => {
	res.json(quotes);
});

//Read Get /quotes/:id
server.get("/quotes/:id", (req, res) => {
	const id = +req.params.id; // + is used to convert a string into number.
	const quote = quotes.find((p) => {
		return p.id === id;
	});
	res.json(quote);
});

// Update PUT(delete all old data and then inserts new data) /quotes/:id => we need param id because we need to change a specific thing
server.put("/quotes/:id", (req, res) => {
	const id = +req.params.id;
	const quoteIndex = quotes.findIndex((p) => {
		return p.id === id;
	});
	quotes.splice(quoteIndex, 1, { ...req.body, id: id });
	res.status(201).json({ quote: "updated" });
});

// Update PATCH(update's only the patch part of data and remaining data remains in file) /quotes/:id => we need param id because we need to change a specific thing
server.patch("/quotes/:id", (req, res) => {
	const id = +req.params.id;
	const quoteIndex = quotes.findIndex((p) => {
		return p.id === id;
	});
	const quote = quotes[quoteIndex];
	quotes.splice(quoteIndex, 1, { ...quote, ...req.body });
	res.status(201).json({ quote: "patch updated" });
});

// Delete DELETE /quotes/:id => we need param id because we need to change a specific thing
server.delete("/quotes/:id", (req, res) => {
	const id = +req.params.id;
	const quoteIndex = quotes.findIndex((p) => {
		return p.id === id;
	});
	const quote = quotes[quoteIndex];
	quotes.splice(quoteIndex, 1);
	res.status(201).json(quote);
});

server.listen(8000, () => {
	console.log("server started");
});
