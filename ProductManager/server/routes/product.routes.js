const ProductController = require("../controllers/Product.controller");

module.exports = (app) => {
	app.get("/api/product", ProductController.findAllProducts);
	app.get("/api/product/:id", ProductController.getDetail);
	app.post("/api/product", ProductController.createProduct);
	app.patch("/api/product/:id", ProductController.updateProduct);
	app.delete("/api/product/:id", ProductController.deleteProduct);
};
