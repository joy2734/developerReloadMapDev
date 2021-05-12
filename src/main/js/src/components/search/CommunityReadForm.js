import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {changePageAction} from '../../store/actions/RoadMapAction';
import {FormControl} from '@material-ui/core';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';

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
        width: '100px'
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
        border: '1px solid black'
    }
}));


const CommunityReadForm = ({
    
}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comment, setCommnet] = useState({});
    const commId = useSelector(store => store.commLoadIdReducer);

    useEffect(()=>{
        fetch('/list?commuNum='+commId)
        .then(resp => { return resp.json() })
        .then(resp => {
            setCommnet(resp[0])
        })
    }, []);

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
                <Button className={classes.button} 
                    onClick={()=> dispatch(changePageAction('home'))} 
                    variant="contained" 
                color="primary">수정</Button>
            </div>
        </div>
    )
}

export default CommunityReadForm;