const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => console.log("Connected successfully"))  // Si la conexión es exitosa, muestra un mensaje de éxito
  .catch((err) => console.error(err));  // Si hay un error, muestra un mensaje de error
app.use("/todos",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});
