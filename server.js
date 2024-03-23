const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.Port || 5000;

app.get("api/contacts", (req, res) => {
  res.send("get all contacts ");
});

app.listen(port, () => {
  console.log("Server running on port ${port}");
});
