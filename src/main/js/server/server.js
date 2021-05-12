const express = require('express');
const _ = require('underscore');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./config/db');

/* 게시판 Api */
app.get('/list', (req, res)=>{
    console.log(req.query)//param
    var dType = req.query.dType;
    var params = _.omit(req.query, 'dType');
    var query =`SELECT commuNum,
            title,
            content,
            contype,
            DATE_FORMAT(regDate, '%y-%m-%d') AS regDate,
            DATE_FORMAT(modifyDate, '%y-%m-%d') AS modifyDate,
            writer
        FROM COMMUNITY_INFO`;
    Object.keys(params).forEach(function(param, idx){
        if(params[param] && params[param] != "")
            query += (idx == 0 ? ' WHERE ': ' OR ') + param + ' Like\"%'+ params[param] +'%\"'
        if(param == 'title' && params[param] != "")
            query += ( ' OR ' ) + 'content' + ' Like\"%'+ params[param] +'%\"'
    });

    if(dType && dType != "all"){
        query += (_.compact(params).length > 0 ? ' AND ': ' WHERE ') 
        switch(dType){
            case 'day':
                query += ' modifyDate' + ' BETWEEN DATE_ADD(NOW(),INTERVAL -1 DAY ) AND NOW() ';
                break;
            case 'week':
                query += ' modifyDate' + ' BETWEEN DATE_ADD(NOW(),INTERVAL -1 WEEK ) AND NOW() ';
                break;
            case 'month':
                query += ' modifyDate' + ' BETWEEN DATE_ADD(NOW(),INTERVAL -1 MONTH ) AND NOW() ';
                break;
            case 'smonth':
                query += ' modifyDate' + ' > DATE_ADD(NOW(),INTERVAL -6 MONTH ) ';
                break;
            case 'year':
                query += ' modifyDate' + ' BETWEEN DATE_ADD(NOW(),INTERVAL -1 YEAR ) AND NOW() ';
                break;
            default:        
        }
    }
    
    query += ' ORDER BY commuNum';

    console.log(query);
    db.query(query, (err, data)=>{
        if(!err) res.send(data)
        else res.send(err)
    })
})

/* 상단 menu load api */
app.get('/menu', (req, res)=>{
    db.query('SELECT * FROM MENU_INFO', (err, data)=>{
        if(!err) res.send(data)
        else res.send(err)
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}/`);
})