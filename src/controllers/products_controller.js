const productsCtrl = {};

const Product = require('../models/product');

productsCtrl.getProducts = async (req, res) => {
  const products = await Product.find().populate({
    path: 'updatedBy'
  });
  res.json(products);
};

module.exports = productsCtrl;
