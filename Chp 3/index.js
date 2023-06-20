const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express(); //? server started

//? MIDDLEWARE:
// server.use(express.json()); //? for entering data in body during passing request.

// server.use(morgan("dev"));

// server.use(express.static("public"));

// const auth = (req, res, next) => {
// 	if (req.body.password == 123) {
// 		// console.log(req.query);
// 		next();
// 	} else {
// 		res.sendStatus(401);
// 	}
// };
// server.use(auth);

//? API - ENDPOINT - ROUTE

//? Assignments
// server.get("/product/:name/:class", (req, res) => {
// 	console.log(req.params);
// 	// res.json({ type: "get" });
// 	res.send(req.params);
// });

// server.get("/product/demo", (req, res) => {
// 	console.log(req.query);
// 	// res.json({ type: "get" });
// 	res.send(req.query);
// });

// server.post("/", (req, res) => {
// 	res.json({ type: "post" });
// });

// server.put("/", (req, res) => {
// 	res.json({ type: "put" });
// });

// server.delete("/", (req, res) => {
// 	res.json({ type: "delete" });
// });

server.listen(8000, () => {
	console.log("server started");
});
