import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {FormControl} from '@material-ui/core';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';
import {postAction, getPost} from '../../modules';
import {changePageAction} from '../../modules/post';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px auto', 
        '& .MuiTextField-root':{
            padding: '5px'
        },
        width: '800px'
    },
    buttonArea:{
        display: 'flex',
        justifyContent:'space-between'
    },
    button:{
        width: '100px',
        marginLeft: '10px' 
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        width: '700px'
    },
    title:{
        height: '100px',
        border: '1px solid black'
    },
    content:{
        height: '500px',
        border: '1px solid black',
        marginBottom: '20px'
    }
}));


const CommunityReadForm = ({
    userId 
}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comment, setCommnet] = useState({});

    console.log(comment);
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <span><h3>{comment.title}</h3></span>
                <span>{comment.writer}</span>
                <span>{comment.modifyDate}</span>
            </div>
            <div className={classes.content}>
                {comment.content}
            </div>
            <div className={classes.buttonArea}>
                <Button className={classes.button} 
                    onClick={()=> dispatch(changePageAction('home'))} 
                    variant="contained" 
                color="primary">홈으로</Button>
                {/* 로그인 상태 + 유저글작성자와 유저 같아야 보임 */}
                {userId && comment.id === userId? 
                    <div>
                    <Button className={classes.button} 
                        onClick={()=> dispatch(changePageAction('home'))} 
                        variant="contained" 
                    color="primary">수정</Button>
                    <Button className={classes.button} 
                        onClick={()=> dispatch(changePageAction('home'))} 
                        variant="contained" 
                    color="primary">삭제</Button></div>
                : null}
            </div>
        </div>
    )
}

export default CommunityReadForm;