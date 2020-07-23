"use strict";

// Basic express setup:

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});