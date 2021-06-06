const express = require('express');
const _ = require('underscore');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./config/db');
const { query } = require('./config/db');

app.use(bodyParser.json());

/* 게시판 Api */
app.get('/api/list', (req, res)=>{
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
app.get('/api/menu', (req, res)=>{
    db.query('SELECT * FROM MENU_INFO', (err, data)=>{
        if(!err) res.send(data)
        else res.send(err)
    })
});

app.post('/api/login' , (req, res)=>{
    db.query(
        'SELECT userId FROM USER_INFO '+
        'WHERE userId="'+ req.body.userId + '"' +
        ' AND password="'+ req.body.password + '"'
    ,(err, data)=>{
        var userId = data.length > 0 ? data[0].userId : null
        if(!err) res.send({userId, SUCCESS: true});
        else res.send(err);
    });
});

app.get('/api/isExistUser' , (req, res)=>{
    var params = req.query
    db.query(
        'SELECT * FROM USER_INFO '+
        'WHERE userId="'+ params.userId + '"'
    ,(err, data)=>{
        if(!err) res.send({data, SUCCESS: true});
        else res.send(err);
    });
});

app.post('/api/createUser' , (req, res)=>{
    console.log(req.body);
    var param = req.body;
    var sql ='INSERT INTO USER_INFO (userId, password) '+'VALUES( "'+ param.userId +'", "'+ param.password+'" )';
    db.query(sql ,(err, data)=>{
        if(!err) res.send(true);
        else res.send(err);
    });
});

app.post('/api/changePassword' , (req, res)=>{
    var param = req.body;
    db.query(
        'UPDATE USER_INFO '+
        'SET password='+param.password +
        'WHERE userId='+param.userId
    ,(err, data)=>{
        if(!err) res.send(true);
        else res.send(err);
    });
});

/* 토큰 디비에 저장 */
app.put('/api/saveUserToken', (req, res) =>{
    var param = req.body;
    console.log(param);
    db.query(
        'UPDATE USER_INFO ' + 
        'SET token="'+ param.token + '" '+
        'WHERE userId="' + param.userId + '"'
    ,(err, data)=>{
        if(!err) res.send(true);
        else res.send(err);
    });
});

/* 토큰 체크 */
app.post('/api/checkUserToken', (req, res) =>{
    var param = req.body;
    console.log(param)
    db.query(
        'SELECT token, userId FROM USER_INFO '+
        'WHERE token="' + param.token +'"'
    ,(err, data)=>{
        var userInfo = data.length > 0 ? data[0] : null
        console.log(userInfo)
        if(!err) res.send({...userInfo, SUCCESS: true});
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