const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/list', (req, res)=>{
    db.query('SELECT * FROM COMMUNITY_INFO', (err, data)=>{
        if(!err) res.send({a: data})
        else res.send(err)
    })
})

app.get('/menu', (req, res)=>{
    db.query('SELECT * FROM MENU_INFO', (err, data)=>{
        if(!err) res.send({menu: data})
        else res.send(err)
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}/`);
})