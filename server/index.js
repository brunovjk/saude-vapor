const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "saude-vapor-postdata",
});

app.use(cors());
app.use(express.json());

app.post("/publish/Artigos", (req, res) => {
  const { date } = req.body;
  const { title } = req.body;
  const { text } = req.body;

  let SQL = "INSERT INTO postarticles (date, title, text) VALUES (?, ?, ?)";

  db.query(SQL, [date, title, text], (err, result) => {
    console.log(err);
  });
});

app.post("/publish/Noticias", (req, res) => {
  const { date } = req.body;
  const { title } = req.body;
  const { text } = req.body;

  let SQL = "INSERT INTO postnews (date, title, text) VALUES (?, ?, ?)";

  db.query(SQL, [date, title, text], (err, result) => {
    console.log(err);
  });
});

app.get("/getPostsArticles", (req, res) => {
  let SQL = "SELECT * from postarticles";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/getPostsNews", (req, res) => {
  let SQL = "SELECT * from postnews";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Starting server...");
});
