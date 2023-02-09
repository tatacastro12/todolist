/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGODB_URI, connectionOptions )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
