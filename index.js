const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!",
    status: "success",
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
