const path = require('path');

const express = require('express');

// This comes from 'utils' and just sets the base path consistently
// const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

// exports everything in file as one
// module.exports = router;

// breaks up file into accessible pieces when importing
module.exports = router;
