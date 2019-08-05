const express = require("express");
const app = express();
const PORT = 8000;

app.use("/api/v1", require("./routes/users"));

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
