const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  items: [{
    productId: mongoose.Types.ObjectId,
    quantity: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
