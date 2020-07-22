const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/add-product',adminController.getAddProduct)



//Will only match post requests
router.post('/add-product',adminController.postAddProduct);

router.get('/products',adminController.getProducts);

router.get('/edit-product/:productId',adminController.getEditProduct);

module.exports = router; 
