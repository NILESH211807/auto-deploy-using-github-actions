const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!! v1.0.0");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
