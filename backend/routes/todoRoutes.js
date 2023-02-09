/* eslint-disable no-console */
const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
  Todo.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
    console.log(result);
  });
});

router.post("/new", (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    }
  );
});

router.delete("/:id", (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router
