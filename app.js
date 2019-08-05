const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world !"
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
