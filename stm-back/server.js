const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bcryptjs = require("bcryptjs");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.PASSWORD,
  database: "mydb",
});

// 회원가입 //
app.post("/adduser", (req, res) => {
  const {
    body: { id, password },
  } = req;

  const hashPassword = bcryptjs.hashSync(password, 5, (err, hash) => {
    if (err) {
      console.log(err);
    }
  });

  db.query(
    "INSERT INTO userregister (userid, userpassword) VALUES (?,?)",
    [id, hashPassword],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(409).send("error");
      } else {
        res.send("Good");
      }
    }
  );
});

//로그인//
app.post("/login", (req, res) => {
  const {
    body: { id, password },
  } = req;

  const hashPassword = bcryptjs.hashSync(password, 5, (err, hash) => {
    if (err) {
      console.log(err);
    }
  });

  db.query("SELECT * FROM userregister WHERE userid=?", id, (err, resultId) => {
    if (err) {
      console.log(err);
    }

    if (resultId.length > 0) {
      bcryptjs.compareSync(password, hashPassword, (error, resultPw) => {
        if (resultPw) {
        } else {
          console.log(error);
        }
      });
    } else {
      console.log("로그인실패");
      res.status(404).send("Try again");
    }
    res.status(200).send();
  });
});

app.listen(4000, () => {
  console.log("Server Start at Port 4000!🚀🚀");
});
