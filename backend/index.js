require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var cors = require("cors");

//my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

//port
const port = process.env.PORT;

//middlewares
app.use(bodyParser()); //deprecated
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the ROOT directory!");
});

//starting server
app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});

//DB connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("DB Connection Failed");
  });

//myroutes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
