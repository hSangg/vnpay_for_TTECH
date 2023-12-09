var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "sang",
  password: "sang",
  database: "csharpdb",
});

module.exports = con;
