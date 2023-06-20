const express = require("express");
const productController = require("../controller/product");
const productRouter = express.Router();

productRouter // here we have chained all the method's
	.post("/", productController.createProduct)
	.get("/", productController.getAllProducts)
	.get("/:id", productController.getProduct)
	.put("/:id", productController.replaceProduct)
	.patch("/:id", productController.updateProduct)
	.delete("/:id", productController.deleteProduct);

module.exports = {
	productRouter,
};
