const { Router } = require('express');

const router = Router();

const ProductsController = require('../controllers/products_controller');

router.get('/', ProductsController.getProducts);

module.exports = router;
