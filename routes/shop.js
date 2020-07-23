const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop');
const { toUpperCase } = require('../util/path');

const router = express.Router();



//get home page
router.get('/',shopController.getIndex);
 
//get shop  page with all products
router.get('/products',shopController.getProducts);

//get single product page
router.get('/products/:productId',shopController.getProduct);

//get cart page
router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.post('/cart-delete-item',shopController.postDeleteCartProduct)

//get checkout page
router.get('/checkout',shopController.getCheckout);

//get orders page
router.get('/orders',shopController.getOrders);

module.exports = router; 