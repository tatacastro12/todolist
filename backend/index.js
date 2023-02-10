const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

const uri = `mongodb+srv://tatianac:saraymajo24@cluster0.vhd8ldu.mongodb.net/Todo-list`

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })


    .then(()=> console.log('Connected succefully'))
    .catch(e => console.log(e))

app.use("/todo",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});
