const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  updatedBy: [
    {
      userName:{ type: String }, 
      updatedAt:{ type: Date, required: false, default: Date.now }
    }
  ],
  createdAt: { type: Date, required: false, default: Date.now },
});

module.exports = model('product', productSchema);
