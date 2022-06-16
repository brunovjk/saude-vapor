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
  const imgUrl = req.body.urlImage;
  const date = req.body.date;
  const title = req.body.title;
  const text = req.body.text;

  let q =
    "INSERT INTO postarticles (imgUrl, date, title, text) VALUES (?, ?, ?, ?)";

  db.query(q, [imgUrl, date, title, text], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/publish/Noticias", (req, res) => {
  const imgUrl = req.body.urlImage;
  const date = req.body.date;
  const title = req.body.title;
  const text = req.body.text;

  let q =
    "INSERT INTO postnews (imgUrl, date, title, text) VALUES (?, ?, ?, ?)";

  db.query(q, [imgUrl, date, title, text], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
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
  console.log("Running server...");
});
