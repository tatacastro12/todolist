const express = require("express");


const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:N5l0b9bqd9ht9z25@cluster0.vhd8ldu.mongodb.net/test');


const PORT = 3030;
const app = express();

 mongoose.set('strictQuery', false)

 const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

 app.use("/todos", todoRoutes);

app.listen(PORT, () => {
   console.log("The server is listening on port " + PORT);
});
