const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world !"
  });
});

router.get("/hello", (req, res) => {
  res.status(200).send({
    msg: "HALLO DUNIA"
  });
});

module.exports = router;
