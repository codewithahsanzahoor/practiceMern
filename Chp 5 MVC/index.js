require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");

// console.log("env", process.env.DB_PASSWORD);
const server = express(); //? server started

//? db connection
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
	console.log("database connected");

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//? middleware:
server.use(express.static("public")); //for static hosting direct access of file in url.
server.use(express.json());
server.use("/products", productRoute.productRouter);
server.use("/users", userRoute.userRouter);

//? API - ENDPOINT - ROUTE:
//? M V C (model-view-controller)

server.listen(process.env.PORT, () => {
	console.log("server started");
});
