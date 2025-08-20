const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { userId, items } = req.body;
  const order = new Order({ userId, items });
  await order.save();
  res.status(201).json({ message: "Order placed", order });
};
