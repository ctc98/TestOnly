const express = require("express");

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  console.log("test server is working fine.");
  res.status(200).send("Working");
});

app.listen(port, (err) => {
  if (err) {
    console.log("error while starting server ", err);
  }
  console.log("server is running on port number 5000");
});
