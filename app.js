var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "vash");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port);
