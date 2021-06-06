import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {conTypeMap} from '../../variables/formatter';
import {changePageAction} from '../../modules/post';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px auto', 
        borderTop: '1px solid #eaeaea',
        '& .MuiTextField-root':{
            padding: '5px'
        }
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
        height: '600px',
        width: '700px'
    },
    select:{
        width:'200px',
        marginLeft: '10px',
        marginBottom: '10px',
    }
}));


const CommnunityForm = ({
    mode
}) =>{
    const classes = useStyles();
    const [contype,setContype] = useState('F');
    const dispatch = useDispatch();

    const handleChange = (evt) =>{
        setContype(evt.target.value)
    };

    const selectList = Object.keys(conTypeMap).map(function(key, idx){
        return(
            <MenuItem key={idx} value={key}>{conTypeMap[key]}</MenuItem>
        ) 
    })

    return(
        <div className={classes.container}>
            <div className={classes.form}>
                <InputLabel id="demo-simple-select-label">타입</InputLabel>
                <Select
                    className={classes.select}
                    labelId="demo-simple-select-label"
                    id="outlined-disabled"
                    onChange={handleChange}
                    value={contype}
                    >
                    {selectList}
                </Select>
                <TextField id="outlined-disabled" label="제목" variant="outlined"/>
                <TextField id="outlined-disabled" label="내용" variant="outlined"/>
                <TextField disabled id="outlined-disabled" label="작성자" defaultValue="userId01" variant="outlined"/>
                <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder="내용을 작성해주세요." />
            </div>
            <div className={classes.buttonArea}>
                <Button className={classes.button} 
                    onClick={()=> dispatch(changePageAction('home'))} 
                    variant="contained" 
                color="primary">홈으로</Button>
                <Button className={classes.button} 
                    onClick={()=> dispatch(changePageAction('home'))} 
                    variant="contained" 
                color="primary">등록</Button>
            </div>
        </div>
    )
}

export default CommnunityForm;