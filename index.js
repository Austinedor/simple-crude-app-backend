const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// this helps us to recieve data from in json format
app.use(express.json());

// this helps us to recieve data from in form format
app.use(express.urlencoded({ extended: false }));

// rourtes   
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello form node API and i love programming");
});

// Connection to Congo DB
mongoose
  .connect(
    // "mongodb+srv://edoraugustine1:yHRv9WlvvWRHINTu@backenddb.mamyu9s.mongodb.net/?retryWrites=true&w=majority&appName=backendDB"
    "mongodb://localhost:27017/"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection faiLed");
  });

// connection to local host testing API
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
