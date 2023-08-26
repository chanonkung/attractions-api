const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

const app = express();

app.use(cors());

app.get("/helloworld", function (req, res, next) {
  res.json({ msg: "Hello World!!!" });
});

app.get("/attractions", function (req, res, next) {
  pool.query("SELECT * FROM attractions", function (err, result, fields) {
    res.json(result);
  });
});

app.listen(5000, function () {
  console.log("web server listening on port 5000!");
});
