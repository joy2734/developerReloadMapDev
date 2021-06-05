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
        if(param == 'commuNum'){
            query += ' WHERE ' + param + '=\"'+ params[param] +'\"'
        }else{
            if(params[param] && params[param] != "")
                query += (idx == 0 ? ' WHERE ': ' OR ') + param + ' Like\"%'+ params[param] +'%\"'
            if(param == 'title' && params[param] != "")
                query += ( ' OR ' ) + 'content' + ' Like\"%'+ params[param] +'%\"'
        }

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
});

app.get('/login' , (req, res)=>{
    console.log(req);
    db.query(
        'SELECT * FROM USER_INFO'+
        'WHERE userId='+ req.query.userId + 
        'AND password='+ req.query.password
    ,(err, data)=>{
        if(!err) res.send({data, SUCCESS: true});
        else res.send(err);
    });
});

app.get('/createUser' , (req, res)=>{
    console.log(req.body);
    var param = req.body;
    db.query(
        'INSERT INTO USER_INFO'+
        'VALUES('
            + param.userId +','
            + param.password
        +')'
    ,(err, data)=>{
        if(!err) res.send(true);
        else res.send(err);
    });
});

app.get('/changePassword' , (req, res)=>{
    var param = req.body;
    db.query(
        'UPDATE USER_INFO'+
        'SET password='+param.password +
        'WHERE userId='+param.userId
    ,(err, data)=>{
        if(!err) res.send(true);
        else res.send(err);
    });
});


/* 신규 */

/* 		INSERT INTO COMMUNITY_INFO
		(
			title, 
			content, 
			contype, 
			writer, 
			regDate, 
			modifyDate
		)
		VALUES
		(
			#{title},
			#{content},
			#{contype},
			#{writer},
			CURDATE(),
			CURDATE()
		) */


// 수정

/* 		UPDATE COMMUNITY_INFO
		SET title=#{title},
			content=#{content},
			contype=#{conType},
			modifyDate=CURDATE()
		WHERE commuNum=#{commuNum} */
app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}/`);
})