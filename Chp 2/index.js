const http = require("http");
const fs = require("fs");
// const path = require("path");

// const index = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// console.log(products);

const server = http.createServer((req, res) => {
	if (req.url.startsWith("/product")) {
		const id = req.url.split("/")[2];
		// console.log(id);
		const product = products.find((p) => p.id === +id);
		// console.log(product);
		// console.log(product.title);
		res.setHeader("Content-Type", "text/html");
		let modifiedIndex = index
			.replace("**title**", product.title)
			.replace("**imageUrl**", product.thumbnail)
			.replace("**price**", product.price)
			.replace("**rating**", product.rating)
			.replace("**stock**", product.stock);
		res.end(modifiedIndex);
		return;
	}

	switch (req.url) {
		case "/":
			res.setHeader("Content-Type", "text/html");
			res.end(index);
			break;

		// case "/product":
		// 	res.setHeader("Content-Type", "text/html");
		// 	let modifiedIndex = index
		// 		.replace("**title**", product.title)
		// 		.replace("**rating**", product.rating)
		// 		.replace("**imageUrl**", product.thumbnail)
		// 		.replace("**price**", product.price)
		// 		.replace("**stock**", product.stock);
		// 	res.end(modifiedIndex);
		// 	break;

		case "/api":
			res.setHeader("Content-Type", "text/json");
			res.end(JSON.stringify(data));
			break;

		default:
			res.writeHead(404);
			res.end();
			break;
	}

	console.log("server is started");
	// res.setHeader("Content-Type", "text/html");
	// res.end(index);

	// res.setHeader("Content-Type", "text/json");
	// res.end(data);
});

server.listen(8000);
