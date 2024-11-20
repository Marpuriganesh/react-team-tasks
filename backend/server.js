require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
// console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASSWORD,process.env.DB_DATABASE)

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get("/", async (req, res) => {
  console.log("new request came!");
  // const sql = 'INSERT INTO stored_values (username, value) VALUES (?, ?)';
  // const values = ["test","4"]
  try {
    // const [result] = await pool.query(sql, values);
    // res.json({ message: 'User created successfully', id: result.insertId });
    const [rows] = await pool.query("SELECT * FROM stored_values");
    res.json(rows);
  } catch (error) {
    console.error();
  }
});

app.listen(3000);
