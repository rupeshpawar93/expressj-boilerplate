const express = require("express");
const app = express();
const helmet = require("helmet");
const compression = require("compression");
const bodyparser = require("body-parser");
require("./src/config/dbConfig");
const route = require("./src/route");

app.use(helmet());

app.use(compression());

app.use(bodyparser.json());

app.use(route);

app.listen("4000", function() {
  console.log(" app listening on port " + 400);
});
