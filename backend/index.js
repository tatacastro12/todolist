const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();

//mongoose.set('strictQuery', false)

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});
