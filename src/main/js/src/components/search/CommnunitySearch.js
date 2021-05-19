import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import {searchCommuAction} from '../../store/actions/RoadMapAction';
import { useDispatch } from "react-redux";
import {searchDateMap, searchTypeMap} from '../../variables/formatter';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    field:{
        width: '150px',
        margin: '10px'
    },
    textinput:{
        width: '150px',
        margin: '10px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
    },
    button:{
        width: '100px',
        height: '30px'
    }
}));

const CommnunitySearch = ({

}) =>{
    const classes = useStyles();
    const [searchDate, setSearchDate] = React.useState('all');
    const [searchType, setSearchType] = React.useState('title');
    const [searchInput, setSearchInput] = React.useState("");
    const dispatch = useDispatch();

    const sdateHandleChange = (event) => {
        setSearchDate(event.target.value);
    };

    const stypeHandleChange = (event) => {
        setSearchType(event.target.value);
    };

    const onCommunitySearch = () =>{

        let url = getContextPath() + 'list?' + encodeURIComponent(searchType) + '=' + encodeURIComponent(searchInput) + '&dType=' + encodeURIComponent(searchDate)
        fetch(url)
        .then(resp => { return resp.json() })
        .then(resp => {dispatch(searchCommuAction(resp))
        }, []);
    }

    return(
        <div className={classes.container}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">기간</InputLabel>
                <Select
                    className={classes.field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchDate}
                    onChange={sdateHandleChange}
                >
                {Object.keys(searchDateMap).map(function(key, idx){
                    return <MenuItem key={key} value={key}>{searchDateMap[key]}</MenuItem>
                })}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">대상</InputLabel>
                <Select
                    className={classes.field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchType}
                    onChange={stypeHandleChange}
                >
                {Object.keys(searchTypeMap).map(function(key, idx){
                    return <MenuItem key={key} value={key}>{searchTypeMap[key]}</MenuItem>
                })}
                </Select>
            </FormControl>
            {/* 로그인해야보이게도해놔야함. */}
            <InputBase className={classes.textinput} placeholder="검색어를 입력" onChange={(evt) => setSearchInput(evt.target.value)} />{/* setSearchInput(evt.target.value) */}
            <Button className={classes.button} onClick={()=> onCommunitySearch()} variant="contained" color="primary">검색</Button>
        </div>
    )
}

export default CommnunitySearch;