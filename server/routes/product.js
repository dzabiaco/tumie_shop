const express = require('express');

const productController = require('../controllers/product.controller')

const router = express.Router();

router.get(`/fetch-products`, productController.getAllProducts);

router.get(`/fetch-products/:id`, productController.fetchOneProduct);

router.get(`/fetch-related-products`, productController.getRelatedProducts);

router.get(`/fetch-category-products`, productController.getProductsFromCategory);

router.post(`/create-product`, productController.createProduct);

router.delete(`/delete-product/:id`, productController.deleteProduct);

router.put(`/update-product/id`, productController.updateProduct);

router.get(`/get_latest_products`, productController.get_latest_products);


module.exports = router;