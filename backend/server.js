const express = require("express")
const mysql = require("mysql2/promise")
const app = express()

const pool = mysql.createPool({
    host: 'localhost',
    user: 'ganesh',
    password: 'Ganesh@4263',
    database: 'react_team_tasks'
});


app.get("/",async (req,res)=>{
    console.log("new request came!")
    const sql = 'INSERT INTO stored_values (username, value) VALUES (?, ?)';
    const values = ["test","4"]
    try{
        const [result] = await pool.query(sql, values);
        // res.json({ message: 'User created successfully', id: result.insertId });
        const [rows] = await pool.query('SELECT * FROM stored_values');
        res.json(rows);
    }
    catch(error){
        console.error()
    }
})

app.listen(3000)