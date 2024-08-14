// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require("./route/route");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log("Database connection error:", err));


app.use(router);  

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});



