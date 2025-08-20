require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Order MongoDB connected"))
  .catch(err => console.log(err));

app.use('/orders', require('./routes/orders'));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
