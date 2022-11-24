const express = require('express');
const router = express.Router();
const {showCart, addToCart, removeFromCart}= require('../controller/cart')

router.get('/showcart', showCart);
router.post('/addcart', addToCart);
router.delete('/removefromcart', removeFromCart);
module.exports = router;