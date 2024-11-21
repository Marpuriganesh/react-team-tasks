require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//logging middleware
app.use((req, res, next) => {
  console.log("request ip:", req.ip);
  next();
});

app.get("/values", async (req, res) => {
  console.log("sending data to client:");
  try {
    const [rows] = await pool.query("SELECT * FROM stored_values");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.code });
  }
});

app.post("/insert_values", async (req, res) => {
  // console.log(req.body)
  const { username, value } = req.body;
  const sql = "INSERT INTO stored_values (username, value) VALUES (?, ?)";
  const values = [username, value];
  try {
    const [result] = await pool.query(sql, values);
    res.json({ message: "User created successfully", id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.code });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
