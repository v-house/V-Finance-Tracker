const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/v1.0.0", (req, res) => {
  res.sendFile(path.join(__dirname, "v1_0_0.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
