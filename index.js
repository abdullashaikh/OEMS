const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require("cors");

app.use(cors());
require("dotenv").config();

const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

var routes = require("./routes");
routes(app);
