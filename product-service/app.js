require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Product MongoDB connected"))
  .catch(err => console.log(err));

app.use('/products', require('./routes/products'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
