const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "saude-vapor-postdata",
});

const upload = multer({ storage: multer.memoryStorage() });
app.use(cors());
app.use(express.json());

app.post("/publish/Artigos", (req, res) => {
  const { img } = req.body;
  const { date } = req.body;
  const { title } = req.body;
  const { text } = req.body;

  let SQL =
    "INSERT INTO postarticles (img, date, title, text) VALUES (?, ?, ?, ?)";

  db.query(SQL, [img, date, title, text], (err, result) => {
    console.log(err);
  });
});

app.post("/publish/Noticias", upload.single("img"), (req, res) => {
  const img = req.file;
  const imgv2 = req.body.img;
  const date = req.body.date;
  const title = req.body.title;
  const text = req.body.text;
  console.log(img);
  console.log(imgv2);

  // let SQL = "INSERT INTO postnews (img, date, title, text) VALUES (?, ?, ?, ?)";

  // db.query(SQL, [img, date, title, text], (err, result) => {
  //   console.log(err);
  // });
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
