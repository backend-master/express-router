const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Using query parameter
  const qs = req.query;
  console.log(qs);
  res.status(200).json({
    message: "hello world !",
    query: qs
  });
});

router.get("/hello", (req, res) => {
  res.status(200).send({
    msg: "HALLO DUNIA"
  });
});

module.exports = router;
