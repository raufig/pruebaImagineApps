const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  updatedBy: [{ type: Schema.Types.ObjectId, ref: 'user', required: true }],
  createdAt: { type: Date, required: false, default: Date.now },
});

module.exports = model('product', productSchema);
