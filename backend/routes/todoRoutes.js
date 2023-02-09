const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
  Todo.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

module.exports = router;