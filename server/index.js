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

app.post("/postPostcollection", (req, res) => {
  const docName = req.body.docName;
  const urlImage = req.body.urlImage;
  const category = req.body.category;
  const title = req.body.title;
  const date = req.body.date;
  const author = req.body.author;
  const linkAuthor = req.body.linkAuthor;
  const text = req.body.text;

  let q =
    "INSERT INTO postcollection (docName, urlImage, category, title, date, author, linkAuthor, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    q,
    [docName, urlImage, category, title, date, author, linkAuthor, text],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.get("/getPostcollection", (req, res) => {
  console.log("ola");
  let SQL = "SELECT * from postcollection";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Running server...");
});
